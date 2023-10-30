import { Link, useLocation } from "react-router-dom";

import {
  AddBtnWrapper,
  AddIcon,
  AddLink,
  Form,
  InputWrapper,
  LabelSearchStyled,
  LinkStyled,
  List,
  ListItem,
  SearchBtn,
  SearchFieldStyled,
  SectionStyled,
} from "./YourRecipes.styled";
// import { AiFillPlusCircle } from "react-icons/ai";
import { useGetRecipesQuery } from "../../../redux/recipe/recipeSlice";

const YourRecipes = () => {
  const location = useLocation();
  const { data: recipes } = useGetRecipesQuery();
  // console.log("your recipes", recipes);
  return (
    <SectionStyled>
      <Form
        // onSubmit={handleSearchSubmit}
        autoComplete="off"
      >
        <LabelSearchStyled htmlFor="search-cocktail">
          Your Recipes:
        </LabelSearchStyled>
        <InputWrapper>
          <SearchFieldStyled
            id="search-cocktail"
            type="search"
            name="cocktailName"
            placeholder="-- Mojito --"
            // onChange={handleSearchChange}
            // value={searchValue}
            autoComplete="off"
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </InputWrapper>
      </Form>

      <List>
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipe) => {
            return (
              <LinkStyled
                key={recipe.id}
                to={`/your-recipes/${recipe.id}`}
                state={{ from: location }}
              >
                {recipe.name}
              </LinkStyled>
            );
          })}
      </List>
      {/* // recipes && recipes.length > 0 ? (
        // recipes.map((recipe) => { }) */}
      <AddBtnWrapper>
        <AddLink to="/your-recipes/add" state={{ from: location }}>
          <AddIcon />
        </AddLink>
      </AddBtnWrapper>
    </SectionStyled>
  );
};

export default YourRecipes;
