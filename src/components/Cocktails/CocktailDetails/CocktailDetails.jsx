import { useParams } from "react-router-dom";
import { useSearchCocktailByIdQuery } from "../../../redux/cocktails/cocktailsSlice";
import { useEffect, useState } from "react";
import {
  CocktailImage,
  CocktailName,
  IngredientItem,
  IngredientsList,
  IngredientsTitle,
  Instruction,
  SectionStyled,
} from "./CocktailDetails.styled";

const CocktailDetails = () => {
  const [cocktailData, setCocktailData] = useState(null);
  const { cocktailId } = useParams();
  const { data: cocktail } = useSearchCocktailByIdQuery(cocktailId, {
    skip: !cocktailId,
  });
  console.log("cocktail", cocktail);
  useEffect(() => {
    if (!cocktail) {
      setCocktailData([]);
      return;
    }
    setCocktailData(cocktail.drinks[0]);
  }, [cocktail]);

  let ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (cocktailData[`strIngredient${i}`] !== null) {
      ingredients.push(cocktailData[`strIngredient${i}`]);
    }
  }

  let measures = [];
  for (let i = 1; i <= 15; i++) {
    if (cocktailData[`strMeasure${i}`] !== null) {
      measures.push(cocktailData[`strMeasure${i}`]);
    }
  }

  console.log("ingredients", ingredients);
  return (
    <SectionStyled>
      <CocktailName>{cocktailData.strDrink}</CocktailName>
      <CocktailImage
        src={cocktailData.strDrinkThumb}
        alt={cocktailData.strDrink}
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
      <Instruction>{cocktailData.strInstructions}</Instruction>
    </SectionStyled>
  );
};

export default CocktailDetails;
