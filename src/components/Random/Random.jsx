import { useEffect, useState } from "react";
import { BiDrink } from "react-icons/bi";
import { MdNoDrinks } from "react-icons/md";

import { fetchRandomCocktail } from "../../services/fetchCoctails";
import {
  AlcoholIconText,
  AlcoholIconWrapper,
  CocktailName,
  MainSubTitle,
  MainTitle,
  RandomItemDescriptionWrapper,
  RandomItemWrapper,
  RandomItemsDiv,
  StyledRandom,
} from "./Random.styled";
import data from "../../aaaaa.json";

const Random = () => {
  const [randomCocktail, setRandomCocktail] = useState(data);

  //   useEffect(() => {
  //     fetchRandomCocktail().then((res) => setRandomCocktail(res.data.drinks[0]));
  //   }, []);

  console.log(randomCocktail);

  return (
    <StyledRandom>
      <MainTitle> Random recipes </MainTitle>
      <MainSubTitle>Don't know what to choose ?</MainSubTitle>
      <RandomItemsDiv>
        <RandomItemWrapper>
          <img
            src={randomCocktail.strDrinkThumb}
            alt={randomCocktail.strDrink}
          />
          <RandomItemDescriptionWrapper>
            <CocktailName>{randomCocktail.strDrink}</CocktailName>
            {randomCocktail.strAlcoholic === "Alcoholic" ? (
              <AlcoholIconWrapper>
                <BiDrink color="#e2e2e2" size={20} />
                <AlcoholIconText>Alcohol</AlcoholIconText>
              </AlcoholIconWrapper>
            ) : (
              <AlcoholIconWrapper>
                <MdNoDrinks color="#e2e2e2" size={20} />
                <AlcoholIconText>Non-alcohol</AlcoholIconText>
              </AlcoholIconWrapper>
            )}
          </RandomItemDescriptionWrapper>
        </RandomItemWrapper>
        <RandomItemWrapper second>
          <img
            src={randomCocktail.strDrinkThumb}
            alt={randomCocktail.strDrink}
          />
          <RandomItemDescriptionWrapper>
            <CocktailName>{randomCocktail.strDrink}</CocktailName>
            {randomCocktail.strAlcoholic === "Alcoholic" ? (
              <AlcoholIconWrapper>
                <BiDrink color="#e2e2e2" size={20} />
                <AlcoholIconText>Alcohol</AlcoholIconText>
              </AlcoholIconWrapper>
            ) : (
              <AlcoholIconWrapper>
                <MdNoDrinks color="#e2e2e2" size={20} />
                <AlcoholIconText>Non-alcohol</AlcoholIconText>
              </AlcoholIconWrapper>
            )}
          </RandomItemDescriptionWrapper>
        </RandomItemWrapper>
      </RandomItemsDiv>
    </StyledRandom>
  );
};

export default Random;
