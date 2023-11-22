import { MdNoDrinks } from "react-icons/md";
import { BiDrink } from "react-icons/bi";

import {
  Form,
  IngerdientsWrapper,
  IngredientItem,
  IngredientsList,
  InputWrapper,
  Item,
  ItemIsAlcoholic,
  ItemIsAlcoholicWrapper,
  ItemTitle,
  LabelSearchStyled,
  List,
  SearchBtn,
  SearchFieldStyled,
  SectionStyled,
} from "./CocktailsSearch.styled";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSearchCocktailsQuery } from "../../../redux/cocktails/cocktailsSlice";

const CocktailsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cocktails, setCocktails] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [cocktailName, setCocktailName] = useState("");
  const searchQuery = searchParams.get("search") ?? "";

  const { data: cocktailsList } = useSearchCocktailsQuery(cocktailName, {
    skip: !cocktailName,
  });

  const location = useLocation();

  useEffect(() => {
    if (cocktailsList) {
      setCocktails(cocktailsList.drinks);
    }
  }, [cocktailsList]);

  useEffect(() => {
    if (!searchQuery) {
      setCocktails([]);
      return;
    }
    setCocktailName(searchQuery);
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
  };

  return (
    <SectionStyled>
      <Form onSubmit={handleSearchSubmit} autoComplete="off">
        <LabelSearchStyled htmlFor="search-cocktail">
          Find your cocktail:
        </LabelSearchStyled>
        <InputWrapper>
          <SearchFieldStyled
            id="search-cocktail"
            type="search"
            name="cocktailName"
            placeholder="-- Mojito --"
            onChange={handleSearchChange}
            value={searchValue}
            autoComplete="off"
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </InputWrapper>
      </Form>
      {cocktails && (
        <List>
          {cocktails.map((cocktail) => {
            let ingredients = [];
            for (let i = 1; i <= 15; i++) {
              if (cocktail[`strIngredient${i}`] !== null) {
                ingredients.push(cocktail[`strIngredient${i}`]);
              }
            }
            return (
              <Item
                to={`${cocktail.idDrink}`}
                state={{ from: location }}
                key={cocktail.idDrink}
              >
                <ItemTitle>{cocktail.strDrink}</ItemTitle>
                <IngerdientsWrapper>
                  {cocktail.strAlcoholic === "Alcoholic" && (
                    <ItemIsAlcoholicWrapper>
                      <BiDrink color="#ff723e" size={17} />
                      <ItemIsAlcoholic>{cocktail.strAlcoholic}</ItemIsAlcoholic>
                    </ItemIsAlcoholicWrapper>
                  )}
                  {cocktail.strAlcoholic === "Non alcoholic" && (
                    <ItemIsAlcoholicWrapper>
                      <MdNoDrinks color="#ff723e" size={17} />
                      <ItemIsAlcoholic>{cocktail.strAlcoholic}</ItemIsAlcoholic>
                    </ItemIsAlcoholicWrapper>
                  )}
                  <IngredientsList>
                    {ingredients.map((ingredient, index) => (
                      <IngredientItem key={index}>{ingredient}</IngredientItem>
                    ))}
                  </IngredientsList>
                </IngerdientsWrapper>
              </Item>
            );
          })}
        </List>
      )}
    </SectionStyled>
  );
};

export default CocktailsSearch;
