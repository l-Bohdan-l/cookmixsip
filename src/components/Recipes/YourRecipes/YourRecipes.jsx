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
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useEffect, useState } from "react";

const YourRecipes = () => {
  const location = useLocation();
  const [allRecipes, setallRecipes] = useState([]);
  // const { data: recipes } = useGetRecipesQuery();
  // console.log("your recipes", recipes);
  const getAllPosts = async () => {
    const allPosts = await onSnapshot(collection(db, "recipes"), (data) => {
      setallRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getAllPosts();
  }, []);
  console.log(allRecipes);
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

      {/* <List>
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
      </List> */}
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
