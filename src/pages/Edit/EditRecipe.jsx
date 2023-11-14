import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { RecipeForm } from "../../components/RecipeForm/RecipeForm";
import {
  GoBackBtn,
  BtnIcon,
  BtnText,
  Wrapper,
  Title,
} from "./EditRecipe.styled.js";

export const EditRecipe = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  const handleSubmit = () => {};

  return (
    <Wrapper>
      <Link to={backLinkRef.current}>
        <GoBackBtn desktop type="button">
          <BtnIcon />
          <BtnText desktop>Go Back</BtnText>
        </GoBackBtn>
      </Link>
      <Title>Edit your recipe</Title>
      <RecipeForm />
    </Wrapper>
  );
};
