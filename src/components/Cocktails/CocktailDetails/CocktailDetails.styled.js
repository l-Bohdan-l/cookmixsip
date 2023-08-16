import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import styled from "styled-components";

export const SectionStyled = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
`;

export const CocktailName = styled.h2`
  color: #e2e2e2;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.072px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

export const CocktailAlcohol = styled.p`
  color: #e2e2e2;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.051px;
  margin-bottom: 10px;
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const CocktailImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    width: 50%;
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
  }
`;

export const IngredientsTitle = styled.p`
  color: #e2e2e2;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06px;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* margin-bottom: 10px; */
  justify-content: center;
  align-items: flex-start;
  list-style: inside;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
`;

export const IngredientItem = styled.li`
  color: #e2e2e2;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.051px;
  /* position: relative; */
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Instruction = styled.p`
  color: #e2e2e2;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.051px;
  margin-bottom: 10px;
  text-align: justify;
  text-justify: inter-word;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const InstructionTitle = styled.h3`
  color: #e2e2e2;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06px;
  margin-bottom: 10px;
  text-align: center;
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const GoBackBtn = styled.button`
  display: block;
  position: absolute;
  top: 5px;
  left: 0px;
  margin: 0 auto;
  /* padding: 5px; */
  border-radius: 10px;
  border: none;
  background-color: transparent;

  color: #000;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.051px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  @media screen and (min-width: 1280px) {
    background-color: ${(props) => (props.desktop ? "#e2e2e2" : "transparent")};
    font-size: 20px;
    top: 10px;
    left: 0px;
    padding: 10px 20px;
    &:hover,
    &:focus {
      background-color: ${(props) => (props.desktop ? "#000" : "transparent")};
      color: ${(props) => (props.desktop ? " #e2e2e2" : "transparent")};
    }
  }
`;

export const BtnText = styled.span`
  display: none;
  @media screen and (min-width: 1280px) {
    display: inline-block;
  }
`;

export const BtnIcon = styled(BsFillArrowLeftCircleFill)`
  color: #e2e2e2;
  font-size: 20px;
  &:hover,
  &:focus {
    color: orange;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
