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
  YoutubeText,
  YoutubeWrapper,
  UrlNone,
  DeleteButton,
  EditButton,
  ButtonWrapper,
} from "./RecipeDetails.styled";
import { useGetRecipeByIdQuery } from "../../../redux/recipe/mealsSlice";
import { useGetYourRecipeByidQuery } from "../../../redux/recipe/recipeSlice";
import mealImg from "../../../images/YourRecipeDetails/meal.jpg";
import cocktailImg from "../../../images/YourRecipeDetails/cocktails.jpg";
import { db } from "../../../firebase/config";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

const RecipeDetails = () => {
  const { mealId, recipeId } = useParams();
  const { data: recipe, isSuccess } = useGetRecipeByIdQuery(mealId, {
    skip: !mealId,
  });

  // const { data: yourRecipe, isSuccess: isSuccessYourRecipe } =
  //   useGetYourRecipeByidQuery(recipeId, { skip: !recipeId });

  // console.log("your recipe", yourRecipe, recipeId);

  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [youtube, setYoutube] = useState("");
  const [yourRecipe, setYourRecipe] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");
  const navigate = useNavigate();
  // const goFrom = location.state.from.pathname;
  // console.log("location", goFrom);

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
    getYouRecipe();
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
          {/* <iframe
            src={`${youtube}?autoplay=0&mute=1`}
            title={recipe.meals[0].strMeal}
          ></iframe> */}
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
          {/* <IngredientsTitle>{yourRecipe.mealType}</IngredientsTitle> */}
          {yourRecipe.mealType === "Meal" ? (
            <RecipeImage src={mealImg} alt="plate of food on a table" />
          ) : (
            <RecipeImage src={cocktailImg} alt="a lot of alcohol bottles" />
          )}
          <IngredientsTitle> Ingredients: </IngredientsTitle>
          <IngredientsList>
            {yourRecipe.ingredients.map((ingredient, index) => (
              <IngredientItem key={index}>
                {ingredient.ingredientsName} - {ingredient.ingredientsAmount}{" "}
                {ingredient.measure}
              </IngredientItem>
            ))}
          </IngredientsList>
          <InstructionTitle>Description:</InstructionTitle>
          <Instruction>{yourRecipe.description}</Instruction>
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
        </>
      )}
      <ButtonWrapper>
        <EditButton to="edit" state={{ from: location }}>
          Edit
        </EditButton>
        <DeleteButton onClick={handleDelete} type="button">
          Delete
        </DeleteButton>
      </ButtonWrapper>
    </SectionStyled>
  );
};

export default RecipeDetails;
