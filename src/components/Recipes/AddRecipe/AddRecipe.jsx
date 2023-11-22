import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import {
  BtnIcon,
  BtnText,
  GoBackBtn,
  Section,
  Title,
} from "./AddRecipe.styled";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../redux/hooks/useAuth";
import { RecipeForm } from "../../RecipeForm/RecipeForm";

const AddRecipe = () => {
  const { authId, authName } = useAuth();

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");
  const navigate = useNavigate();

  const addRecipe = async (values) => {
    await addDoc(collection(db, "recipes"), {
      ...values,
      userName: authName,
      userId: authId,
    });
  };

  const handleSubmit = (values) => {
    addRecipe(values);
    navigate("/your-recipes");
  };

  return (
    <Section>
      <Link to={backLinkRef.current}>
        <GoBackBtn desktop type="button">
          <BtnIcon />
          <BtnText desktop>Go Back</BtnText>
        </GoBackBtn>
      </Link>
      <Title>Add Recipe</Title>
      <RecipeForm onSubmit={handleSubmit} />
    </Section>
  );
};

export default AddRecipe;
