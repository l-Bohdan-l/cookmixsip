import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { RecipeForm } from "../../components/RecipeForm/RecipeForm";
import {
  GoBackBtn,
  BtnIcon,
  BtnText,
  Wrapper,
  Title,
} from "./EditRecipe.styled.js";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config.js";

export const EditRecipe = () => {
  const [yourRecipe, setYourRecipe] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const recipeRef = doc(db, "recipes", recipeId);
    await updateDoc(recipeRef, { ...values });
    navigate(`/${backLinkRef.current.pathname}`);
  };

  useEffect(() => {
    const getYouRecipe = async () => {
      const commentRef = doc(db, "recipes", recipeId);
      const a = await getDoc(commentRef);
      // , (data) => {
      // console.log("aaaaaaaa", data);
      // const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // setYourRecipe(res);
      // });
      setYourRecipe(a.data());
    };
    if (recipeId) {
      getYouRecipe();
    }
  }, [recipeId]);

  console.log("111", yourRecipe);
  // const { name, alcoholType, description, ingredients, mealType, url} = yourRecipe;
  return (
    <Wrapper>
      <Link to={backLinkRef.current}>
        <GoBackBtn desktop type="button">
          <BtnIcon />
          <BtnText desktop>Go Back</BtnText>
        </GoBackBtn>
      </Link>
      <Title>Edit your recipe</Title>
      <RecipeForm
        onSubmit={handleSubmit}
        // name={yourRecipe?.name}
        recipeInfo={yourRecipe}
      />
    </Wrapper>
  );
};
