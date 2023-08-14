import styled from "styled-components";

export const SectionStyled = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
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
`;

export const CocktailImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const IngredientsTitle = styled.p`
  color: #e2e2e2;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06px;
  margin-bottom: 10px;
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
`;
