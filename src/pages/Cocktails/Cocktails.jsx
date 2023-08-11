import { TextField } from "@mui/material";
import {
  Form,
  InputWrapper,
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
            <li key={cocktail.idDrink}>
              <h2>{cocktail.strDrink}</h2>
              <p>{cocktail.strAlcoholic}</p>
              {ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </li>
          );
        })}
      </List>
    </SectionStyled>
  );
};

export default Cocktails;
