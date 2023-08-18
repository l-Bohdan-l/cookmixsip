import { useEffect, useState } from "react";
import { BiDrink } from "react-icons/bi";
import { MdNoDrinks } from "react-icons/md";

// import { fetchRandomCocktail } from "../../services/fetchCoctails";
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
// import data from "../../aaaaa.json";
import { useGetRandomCocktailQuery } from "../../redux/cocktails/cocktailsSlice";
import { useGetRandomRecipeQuery } from "../../redux/recipe/mealsSlice";

const Random = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [randomMeal, setRandomMeal] = useState(null);
  const {
    data: cocktailData,
    // isFetching
  } = useGetRandomCocktailQuery();
  const {
    data: mealData,
    // isFetching: isFetchingMeal
  } = useGetRandomRecipeQuery();

  useEffect(() => {
    if (cocktailData && mealData) {
      setRandomCocktail(cocktailData.drinks[0]);
      setRandomMeal(mealData.meals[0]);
    }
  }, [cocktailData, mealData]);

  console.log(randomCocktail, randomMeal);

  return (
    <StyledRandom>
      <MainTitle> Random recipes </MainTitle>
      <MainSubTitle>Don't know what to choose ?</MainSubTitle>
      {randomCocktail && randomMeal && (
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
            <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
            <RandomItemDescriptionWrapper>
              <RandomItemName>{randomMeal.strMeal}</RandomItemName>
              <ExtraDescrWrapper>
                <ExtraDescrText>{randomMeal.strArea}</ExtraDescrText>
              </ExtraDescrWrapper>
            </RandomItemDescriptionWrapper>
          </RandomItemWrapper>
        </RandomItemsDiv>
      )}
    </StyledRandom>
  );
};

export default Random;
