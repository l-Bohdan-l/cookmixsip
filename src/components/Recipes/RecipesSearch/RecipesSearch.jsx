import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  Form,
  InputWrapper,
  LabelSearchStyled,
  List,
  ListItem,
  ListItemWrapper,
  RecipeDescriptionWrapper,
  RecipeImg,
  RecipeName,
  SearchBtn,
  SearchFieldStyled,
  SectionStyled,
} from "./RecipesSearch.styled";
import { useSearchRecipeByNameQuery } from "../../../redux/recipe/mealsSlice";

const RecipesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recipes, setRecipes] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const searchQuery = searchParams.get("search") ?? "";

  const location = useLocation();

  const { data: recipesList } = useSearchRecipeByNameQuery(recipeName, {
    skip: !recipeName,
  });

  console.log("recipesList", recipesList);

  useEffect(() => {
    if (recipesList) {
      setRecipes(recipesList.meals);
    }
  }, [recipesList]);

  useEffect(() => {
    if (!searchQuery) {
      setRecipes([]);
      return;
    }
    setRecipeName(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.recipeName.value);
    if (form.recipeName.value.trim() === "") {
      return toast.error("Please enter cocktail name");
    }
    const nextParams =
      form.recipeName.value !== "" ? { search: form.recipeName.value } : {};
    setSearchParams(nextParams);

    // console.log(form.cocktailName.value);

    // setCocktailName(form.cocktailName.value);
  };

  return (
    <SectionStyled>
      <Form onSubmit={handleSearchSubmit} autoComplete="off">
        <LabelSearchStyled htmlFor="search-recipe">
          Find your recipe:
        </LabelSearchStyled>
        <InputWrapper>
          <SearchFieldStyled
            id="search-recipe"
            type="search"
            name="recipeName"
            placeholder="-- Cake --"
            onChange={handleSearchChange}
            value={searchValue}
            autoComplete="off"
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </InputWrapper>
      </Form>
      {recipes && (
        <List>
          {recipes.map((recipe) => (
            <ListItem
              key={recipe.idMeal}
              to={`${recipe.idMeal}`}
              state={{ from: location }}
            >
              <ListItemWrapper>
                <RecipeImg src={recipe.strMealThumb} alt={recipe.strMeal} />
                <RecipeDescriptionWrapper>
                  <RecipeName>{recipe.strMeal}</RecipeName>
                </RecipeDescriptionWrapper>
              </ListItemWrapper>
            </ListItem>
          ))}
        </List>
      )}
    </SectionStyled>
  );
};

export default RecipesSearch;
