import { useEffect, useState } from "react";
import { BiDrink } from "react-icons/bi";
import { MdNoDrinks } from "react-icons/md";

import { fetchRandomCocktail } from "../../services/fetchCoctails";
import {
  ExtraDescrText,
  ExtraDescrWrapper,
  RandomItemName,
  MainSubTitle,
  MainTitle,
  RandomItemDescriptionWrapper,
  RandomItemWrapper,
  RandomItemsDiv,
  StyledRandom,
} from "./Random.styled";
import data from "../../aaaaa.json";
import { useGetRandomCocktailQuery } from "../../redux/cocktails/cocktailsSlice";
import { useGetRandomRecipeQuery } from "../../redux/recipe/recipeslice";

const Random = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [randomRecipe, setRandomRecipe] = useState(null);
  const { data: cocktailData, isFetching } = useGetRandomCocktailQuery();
  const { data: recipeData, isFetching: isFetchingRecipe } =
    useGetRandomRecipeQuery();

  useEffect(() => {
    if (cocktailData && recipeData) {
      setRandomCocktail(cocktailData.drinks[0]);
      setRandomRecipe(recipeData.meals[0]);
    }
  }, [cocktailData, recipeData]);

  console.log(randomCocktail, randomRecipe);

  return (
    <StyledRandom>
      <MainTitle> Random recipes </MainTitle>
      <MainSubTitle>Don't know what to choose ?</MainSubTitle>
      {randomCocktail && randomRecipe && (
        <RandomItemsDiv>
          <RandomItemWrapper>
            <img
              src={randomCocktail.strDrinkThumb}
              alt={randomCocktail.strDrink}
            />
            <RandomItemDescriptionWrapper>
              <RandomItemName>{randomCocktail.strDrink}</RandomItemName>
              {randomCocktail.strAlcoholic === "Alcoholic" ? (
                <ExtraDescrWrapper>
                  <BiDrink color="#e2e2e2" size={20} />
                  <ExtraDescrText>Alcohol</ExtraDescrText>
                </ExtraDescrWrapper>
              ) : (
                <ExtraDescrWrapper>
                  <MdNoDrinks color="#e2e2e2" size={20} />
                  <ExtraDescrText>Non-alcohol</ExtraDescrText>
                </ExtraDescrWrapper>
              )}
            </RandomItemDescriptionWrapper>
          </RandomItemWrapper>
          <RandomItemWrapper second>
            <img src={randomRecipe.strMealThumb} alt={randomRecipe.strMeal} />
            <RandomItemDescriptionWrapper>
              <RandomItemName>{randomRecipe.strMeal}</RandomItemName>
              <ExtraDescrWrapper>
                <ExtraDescrText>{randomRecipe.strArea}</ExtraDescrText>
              </ExtraDescrWrapper>
            </RandomItemDescriptionWrapper>
          </RandomItemWrapper>
        </RandomItemsDiv>
      )}
    </StyledRandom>
  );
};

export default Random;
