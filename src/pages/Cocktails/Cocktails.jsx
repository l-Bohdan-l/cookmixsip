import { TextField } from "@mui/material";
import {
  Form,
  IngerdientsWrapper,
  IngredientItem,
  IngredientsList,
  InputWrapper,
  Item,
  ItemIsAlcoholic,
  ItemTitle,
  LabelSearchStyled,
  List,
  SearchBtn,
  SearchFieldStyled,
  SectionStyled,
} from "./Cocktails.styled";

import list from "../../cocktailList.json";
import { useState } from "react";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState(list);
  return (
    <SectionStyled>
      <Form>
        <LabelSearchStyled htmlFor="search-cocktail">
          Find your cocktail:
        </LabelSearchStyled>
        <InputWrapper>
          <SearchFieldStyled
            id="search-cocktail"
            type="search"
            name="name"
            placeholder="-- Mohito --"
          />
          <SearchBtn type="button">Search</SearchBtn>
        </InputWrapper>
      </Form>
      <List>
        {cocktails.map((cocktail) => {
          let ingredients = [];
          for (let i = 1; i <= 15; i++) {
            if (cocktail[`strIngredient${i}`] !== null) {
              ingredients.push(cocktail[`strIngredient${i}`]);
            }
          }
          return (
            <Item key={cocktail.idDrink}>
              <ItemTitle>{cocktail.strDrink}</ItemTitle>
              <IngerdientsWrapper>
                <ItemIsAlcoholic>{cocktail.strAlcoholic}</ItemIsAlcoholic>
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
    </SectionStyled>
  );
};

export default Cocktails;
