import { Link, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AddBtnWrapper,
  AddIcon,
  AddLink,
  DeleteBtn,
  DeleteIcon,
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
import { RiDeleteBin2Fill } from "react-icons/ri";
// import { AiFillPlusCircle } from "react-icons/ai";
import { useGetRecipesQuery } from "../../../redux/recipe/recipeSlice";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../../../redux/hooks/useAuth";

const YourRecipes = () => {
  const location = useLocation();
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";

  const { isLoggedIn, authEmail, authName, authId } = useAuth();
  // const { data: recipes } = useGetRecipesQuery();
  // console.log("your recipes", recipes);
  // const getAllPosts = async () => {
  //   const allPosts = await onSnapshot(collection(db, "recipes"), (data) => {
  //     setallRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   });
  // };

  const getUserRecipes = useCallback(async () => {
    const ref = query(collection(db, "recipes"), where("userId", "==", authId));
    await onSnapshot(ref, (data) => {
      setAllRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, [authId]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userRecipes = [...allRecipes];
    // console.log("before", userRecipes);

    if (form.recipeName.value.trim() === "") {
      getUserRecipes();
    }
    const nextParams =
      form.recipeName.value !== "" ? { search: form.recipeName.value } : {};
    setSearchParams(nextParams);
    setAllRecipes(
      allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(form.recipeName.value.toLowerCase())
      )
    );
  };

  const filterRecipesFromSearchQuery = () => {
    if (searchQuery) {
      // console.log("sssssssssss");
      const newArr = allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setAllRecipes(newArr);
      // return newArr;
    }
  };

  useEffect(() => {
    if (!searchQuery) return;
    filterRecipesFromSearchQuery();
  }, []);
  console.log("searchQuery", searchQuery);

  useEffect(() => {
    getUserRecipes();
    // if (filteredArr) setAllRecipes(filteredArr);
  }, [getUserRecipes]);
  // console.log("dsdasd", filterRecipesFromSearchQuery());

  console.log(allRecipes);
  return (
    <SectionStyled>
      <Form onSubmit={handleSearchSubmit} autoComplete="off">
        <LabelSearchStyled htmlFor="search-recipe">
          Your Recipes:
        </LabelSearchStyled>
        <InputWrapper>
          <SearchFieldStyled
            id="search-recipe"
            type="search"
            name="recipeName"
            placeholder="-- Mojito --"
            // onChange={handleSearchChange}
            // value={searchValue}
            autoComplete="off"
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </InputWrapper>
      </Form>

      <List>
        {allRecipes &&
          allRecipes.length > 0 &&
          allRecipes.map((recipe) => {
            return (
              <ListItem key={`${recipe.id}${recipe.name}`}>
                <LinkStyled
                  to={`/your-recipes/${recipe.id}`}
                  state={{ from: location }}
                >
                  {recipe.name}
                </LinkStyled>
                <DeleteBtn>
                  <DeleteIcon />
                </DeleteBtn>
              </ListItem>
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
