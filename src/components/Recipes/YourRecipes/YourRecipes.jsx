import { Link, useLocation } from "react-router-dom";

import {
  AddBtnWrapper,
  AddIcon,
  AddLink,
  Form,
  InputWrapper,
  LabelSearchStyled,
  SearchBtn,
  SearchFieldStyled,
} from "./YourRecipes.styled";
import { AiFillPlusCircle } from "react-icons/ai";
import { useGetRecipesQuery } from "../../../redux/recipe/recipeslice";

const YourRecipes = () => {
  const location = useLocation();
  const { data } = useGetRecipesQuery();
  console.log(data);
  return (
    <section>
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
      <AddBtnWrapper>
        <AddLink to="/your-recipes/add" state={{ from: location }}>
          <AddIcon />
        </AddLink>
      </AddBtnWrapper>
    </section>
  );
};

export default YourRecipes;
