import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  BtnIcon,
  BtnText,
  GoBackBtn,
  IngredientItem,
  IngredientsList,
  IngredientsTitle,
  Instruction,
  InstructionTitle,
  RecipeImage,
  RecipeName,
  SectionStyled,
  Url,
  UrlTitle,
  YoutubeLink,
  YoutubeWrapper,
  UrlNone,
  DeleteButton,
  EditButton,
  ButtonWrapper,
  ConfirmDeleteWrapper,
  DeleteTitle,
  ConfirmDeleteButtonsWrapper,
  DeclineButton,
} from "./RecipeDetails.styled";
import { useGetRecipeByIdQuery } from "../../../redux/recipe/mealsSlice";
import mealImg from "../../../images/YourRecipeDetails/meal.jpg";
import cocktailImg from "../../../images/YourRecipeDetails/cocktails.jpg";
import { db } from "../../../firebase/config";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import Overlay from "../../Modal/Overlay";

const RecipeDetails = () => {
  const { mealId, recipeId } = useParams();
  const { data: recipe, isSuccess } = useGetRecipeByIdQuery(mealId, {
    skip: !mealId,
  });

  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [youtube, setYoutube] = useState("");
  const [yourRecipe, setYourRecipe] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");
  const navigate = useNavigate();

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

  useEffect(() => {
    if (recipe) {
      let ingredientsArr = [];
      let measuresArr = [];
      for (let i = 1; i <= 20; i++) {
        if (
          recipe.meals[0][`strIngredient${i}`] !== null &&
          recipe.meals[0][`strIngredient${i}`] !== ""
        ) {
          ingredientsArr.push(recipe.meals[0][`strIngredient${i}`]);
        }
      }
      for (let i = 1; i <= 20; i++) {
        if (
          recipe.meals[0][`strMeasure${i}`] !== null &&
          recipe.meals[0][`strIngredient${i}`] !== ""
        ) {
          measuresArr.push(recipe.meals[0][`strMeasure${i}`]);
        }
      }
      setIngredients(ingredientsArr);
      setMeasures(measuresArr);
      setYoutube(recipe.meals[0].strYoutube);
    }
  }, [recipe]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "recipes", recipeId));
    navigate(`/your-recipes`);
  };

  const overlayClick = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <SectionStyled>
      {recipe && mealId && (
        <>
          <Link to={backLinkRef.current}>
            <GoBackBtn desktop type="button">
              <BtnIcon />
              <BtnText desktop>Go Back</BtnText>
            </GoBackBtn>
          </Link>
          <RecipeName>{recipe.meals[0].strMeal}</RecipeName>

          <RecipeImage
            src={recipe.meals[0].strMealThumb}
            alt={recipe.meals[0].strMeal}
          />
          <IngredientsTitle> Ingredients: </IngredientsTitle>
          <IngredientsList>
            {ingredients.map((ingredient, index) =>
              measures[index] ? (
                <IngredientItem key={index}>
                  {ingredient} - {measures[index]}
                </IngredientItem>
              ) : (
                <IngredientItem key={index}>{ingredient}</IngredientItem>
              )
            )}
          </IngredientsList>
          <InstructionTitle>Instruction:</InstructionTitle>
          <Instruction>{recipe.meals[0].strInstructions}</Instruction>
          {youtube && (
            <YoutubeWrapper>
              <YoutubeLink
                href={youtube}
                target="_blank"
                rel="noreferrer noopener"
              >
                Need video Help ?
              </YoutubeLink>
            </YoutubeWrapper>
          )}
        </>
      )}
      {yourRecipe && recipeId && (
        <>
          <Link to={backLinkRef.current}>
            <GoBackBtn desktop type="button">
              <BtnIcon />
              <BtnText desktop>Go Back</BtnText>
            </GoBackBtn>
          </Link>
          <RecipeName>{yourRecipe.name}</RecipeName>

          {yourRecipe.mealType === "Meal" ? (
            <RecipeImage src={mealImg} alt="plate of food on a table" />
          ) : (
            <RecipeImage src={cocktailImg} alt="a lot of alcohol bottles" />
          )}
          <IngredientsTitle> Ingredients: </IngredientsTitle>
          {yourRecipe.ingredients.length === 1 &&
          yourRecipe.ingredients[0].ingredientsAmount === "" &&
          yourRecipe.ingredients[0].ingredientsName === "" &&
          yourRecipe.ingredients[0].measure === "" ? (
            <UrlNone>You didn't add any ingredient</UrlNone>
          ) : (
            <IngredientsList>
              {yourRecipe.ingredients.map((ingredient, index) => (
                <IngredientItem key={index}>
                  {ingredient.ingredientsName} - {ingredient.ingredientsAmount}{" "}
                  {ingredient.measure}
                </IngredientItem>
              ))}
            </IngredientsList>
          )}
          <InstructionTitle>Instruction:</InstructionTitle>
          {yourRecipe.description ? (
            <Instruction>{yourRecipe.description}</Instruction>
          ) : (
            <UrlNone>You didn't add any instructions</UrlNone>
          )}
          <UrlTitle>Url:</UrlTitle>
          {yourRecipe.url ? (
            <Url
              href={yourRecipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {yourRecipe.url}
            </Url>
          ) : (
            <UrlNone>None</UrlNone>
          )}
          <ButtonWrapper>
            <EditButton to="edit" state={{ from: location }}>
              Edit
            </EditButton>
            <DeleteButton onClick={handleModalOpen} type="button">
              Delete
            </DeleteButton>
          </ButtonWrapper>
        </>
      )}
      {modalOpen && (
        <Overlay overlayClick={overlayClick}>
          <ConfirmDeleteWrapper>
            <DeleteTitle>Do you want to delete this recipe ?</DeleteTitle>
            <ConfirmDeleteButtonsWrapper>
              <DeclineButton onClick={overlayClick}>No</DeclineButton>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </ConfirmDeleteButtonsWrapper>
          </ConfirmDeleteWrapper>
        </Overlay>
      )}
    </SectionStyled>
  );
};

export default RecipeDetails;
