import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  Form,
  InputWrapper,
  LabelSearchStyled,
  SearchBtn,
  SearchFieldStyled,
  SectionStyled,
} from "./RecipesSearch.styled";
import { useSearchRecipeByNameQuery } from "../../../redux/recipe/recipeslice";

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
    if (form.cocktailName.value.trim() === "") {
      return toast.error("Please enter cocktail name");
    }
    const nextParams =
      form.cocktailName.value !== "" ? { search: form.cocktailName.value } : {};
    setSearchParams(nextParams);

    // console.log(form.cocktailName.value);

    // setCocktailName(form.cocktailName.value);
  };

  return (
    <SectionStyled>
      <Form
        //   onSubmit={handleSearchSubmit}
        autoComplete="off"
      >
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
        <ul>
          <li></li>
        </ul>
      )}
    </SectionStyled>
  );
};

export default RecipesSearch;
