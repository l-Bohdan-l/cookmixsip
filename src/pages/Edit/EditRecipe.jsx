import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import { RecipeForm } from "../../components/RecipeForm/RecipeForm";
import {
  GoBackBtn,
  BtnIcon,
  BtnText,
  Wrapper,
  Title,
} from "./EditRecipe.styled.js";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config.js";

export const EditRecipe = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const recipeRef = doc(db, "recipes", recipeId);
    await updateDoc(recipeRef, { ...values });
    navigate(`/${backLinkRef.current.pathname}`);
  };

  return (
    <Wrapper>
      <Link to={backLinkRef.current}>
        <GoBackBtn desktop type="button">
          <BtnIcon />
          <BtnText desktop>Go Back</BtnText>
        </GoBackBtn>
      </Link>
      <Title>Edit your recipe</Title>
      <RecipeForm onSubmit={handleSubmit} />
    </Wrapper>
  );
};
