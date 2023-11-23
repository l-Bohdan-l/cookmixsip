import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";

import { RecipeForm } from "../../components/RecipeForm/RecipeForm";
import {
  GoBackBtn,
  BtnIcon,
  BtnText,
  Wrapper,
  Title,
} from "./EditRecipe.styled.js";
import { db } from "../../firebase/config.js";

export const EditRecipe = () => {
  const [yourRecipe, setYourRecipe] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");
  const { recipeId } = useParams();
  const navigate = useNavigate();
  console.log("аааааааааа");

  const handleSubmit = async (values) => {
    const recipeRef = doc(db, "recipes", recipeId);
    const updatedAt = Date.now();
    console.log("1111111111111", updatedAt);
    await updateDoc(recipeRef, { ...values, updatedAt });
    navigate(`/${backLinkRef.current.pathname}`);
  };

  useEffect(() => {
    const getYouRecipe = async () => {
      const commentRef = doc(db, "recipes", recipeId);
      const ref = await getDoc(commentRef);
      setYourRecipe(ref.data());
    };
    if (recipeId) {
      getYouRecipe();
    }
  }, [recipeId]);

  return (
    <Wrapper>
      <Link to={backLinkRef.current}>
        <GoBackBtn desktop type="button">
          <BtnIcon />
          <BtnText desktop>Go Back</BtnText>
        </GoBackBtn>
      </Link>
      <Title>Edit your recipe</Title>
      <RecipeForm onSubmit={handleSubmit} recipeInfo={yourRecipe} />
    </Wrapper>
  );
};
