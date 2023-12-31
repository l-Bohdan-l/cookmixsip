import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchCocktailByIdQuery } from "../../../redux/cocktails/cocktailsSlice";

import {
  BtnIcon,
  BtnText,
  CocktailAlcohol,
  CocktailImage,
  CocktailName,
  GoBackBtn,
  IngredientItem,
  IngredientsList,
  IngredientsTitle,
  Instruction,
  InstructionTitle,
  SectionStyled,
} from "./CocktailDetails.styled";

const CocktailDetails = () => {
  const { cocktailId } = useParams();
  const { data: cocktail, isSuccess } = useSearchCocktailByIdQuery(cocktailId, {
    skip: !cocktailId,
  });

  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    if (cocktail) {
      let ingredientsArr = [];
      let measuresArr = [];
      for (let i = 1; i <= 15; i++) {
        if (cocktail.drinks[0][`strIngredient${i}`] !== null) {
          ingredientsArr.push(cocktail.drinks[0][`strIngredient${i}`]);
        }
      }
      for (let i = 1; i <= 15; i++) {
        if (cocktail.drinks[0][`strMeasure${i}`] !== null) {
          measuresArr.push(cocktail.drinks[0][`strMeasure${i}`]);
        }
      }
      setIngredients(ingredientsArr);
      setMeasures(measuresArr);
    }
  }, [cocktail]);

  return (
    <SectionStyled>
      {cocktail && (
        <>
          <Link to={backLinkRef.current}>
            <GoBackBtn desktop type="button">
              <BtnIcon />
              <BtnText desktop>Go Back</BtnText>
            </GoBackBtn>
          </Link>
          <CocktailName>{cocktail.drinks[0].strDrink}</CocktailName>
          <CocktailAlcohol>{cocktail.drinks[0].strAlcoholic}</CocktailAlcohol>
          <CocktailImage
            src={cocktail.drinks[0].strDrinkThumb}
            alt={cocktail.drinks[0].strDrink}
          />
          <IngredientsTitle> Ingredients: </IngredientsTitle>
          <IngredientsList>
            {ingredients.map((ingredient, index) =>
              measures[index] ? (
                <IngredientItem key={index}>
                  {ingredient} - {measures[index]}
                </IngredientItem>
              ) : (
                <IngredientItem key={index}>{ingredient}</IngredientItem>
              )
            )}
          </IngredientsList>
          <InstructionTitle>Instruction:</InstructionTitle>
          <Instruction>{cocktail.drinks[0].strInstructions}</Instruction>
        </>
      )}
    </SectionStyled>
  );
};

export default CocktailDetails;
