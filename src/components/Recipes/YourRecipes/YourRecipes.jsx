import { useLocation, useSearchParams } from "react-router-dom";
import {
  AddBtnWrapper,
  AddIcon,
  AddLink,
  ConfirmDeleteButton,
  ConfirmDeleteButtonsWrapper,
  ConfirmDeleteWrapper,
  DeclineButton,
  DeleteBtn,
  DeleteIcon,
  DeleteTitle,
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
import {
  collection,
  onSnapshot,
  query,
  where,
  deleteDoc,
  doc,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../../../redux/hooks/useAuth";
import Overlay from "../../Modal/Overlay";

const YourRecipes = () => {
  const location = useLocation();
  const [allRecipes, setAllRecipes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deletedRecipeId, setDeletedRecipeId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";

  const { isLoggedIn, authEmail, authName, authId } = useAuth();

  const getUserRecipes = useCallback(async () => {
    const ref = query(
      collection(db, "recipes"),
      where("userId", "==", authId)
      // orderBy("updatedAt", "desc")
    );
    await onSnapshot(ref, (data) => {
      const recipesArray = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("recipesArray", recipesArray);
      const copy = [...recipesArray].sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      console.log("copy", copy);
      setAllRecipes(copy);
    });
  }, [authId]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userRecipes = [...allRecipes];

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

  const filterRecipesFromSearchQuery = async () => {
    if (searchQuery) {
      const newArr = await allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      console.log("arr", newArr);
    }
  };

  // useEffect(() => {
  //   if (!searchQuery) return;
  //   filterRecipesFromSearchQuery();
  // }, []);

  useEffect(() => {
    getUserRecipes();
  }, [getUserRecipes]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "recipes", deletedRecipeId));
  };

  const handleModalOpen = (id) => {
    setModalOpen(true);
    setDeletedRecipeId(id);
  };

  const overlayClick = () => {
    setModalOpen(false);
    setDeletedRecipeId(null);
  };

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
            autoComplete="off"
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </InputWrapper>
      </Form>

      <List>
        {allRecipes &&
          allRecipes.length > 0 &&
          allRecipes.map((recipe) => {
            console.log(recipe.updatedAt?.toDate());
            return (
              <ListItem key={`${recipe.id}${recipe.name}`}>
                <LinkStyled
                  to={`/your-recipes/${recipe.id}`}
                  state={{ from: location }}
                >
                  {recipe.name}
                </LinkStyled>
                <DeleteBtn onClick={() => handleModalOpen(recipe.id)}>
                  <DeleteIcon />
                </DeleteBtn>
              </ListItem>
            );
          })}
      </List>
      <AddBtnWrapper>
        <AddLink to="/your-recipes/add" state={{ from: location }}>
          <AddIcon />
        </AddLink>
      </AddBtnWrapper>
      {modalOpen && (
        <Overlay overlayClick={overlayClick}>
          <ConfirmDeleteWrapper>
            <DeleteTitle>Do you want to delete this recipe ?</DeleteTitle>
            <ConfirmDeleteButtonsWrapper>
              <DeclineButton onClick={overlayClick}>No</DeclineButton>
              <ConfirmDeleteButton onClick={handleDelete}>
                Delete
              </ConfirmDeleteButton>
            </ConfirmDeleteButtonsWrapper>
          </ConfirmDeleteWrapper>
        </Overlay>
      )}
    </SectionStyled>
  );
};

export default YourRecipes;
