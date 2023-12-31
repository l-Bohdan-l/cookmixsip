import { ErrorMessage, Field, Form } from "formik";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  position: relative;
  @media screen and (min-width: 1280px) {
    padding-bottom: 10px;
  }
`;

export const Title = styled.h2`
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

export const FormStyled = styled(Form)`
  /* background-color: wheat; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  gap: 15px;
  border: 1px solid #ff723e;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(255, 114, 62, 0.75);
  @media screen and (min-width: 1280px) {
    width: 500px;
    padding: 20px;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ff723e;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const InputStyled = styled(Field)`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  font-size: 17px;
  color: #ff723e;
  border: 1px solid #ff723e;
  background-color: transparent;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
  @media (min-width: 1280px) {
    width: 400px;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const MealTypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AddIngredientButton = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  font-size: 17px;
  color: #ff723e;
  border: 1px solid #ff723e;
  background-color: transparent;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    color: #e2e2e2;
    background-color: #ff723e;
  }
  @media (min-width: 1280px) {
    width: 400px;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const ChooseAlcoholType = styled(Field)`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  font-size: 17px;
  color: #ff723e;
  border: 1px solid #ff723e;
  background-color: transparent;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
  @media (min-width: 1280px) {
    width: 400px;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  font-size: 17px;
  color: #ff723e;
  border: 1px solid #ff723e;
  background-color: transparent;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    color: #e2e2e2;
    background-color: #ff723e;
  }
  @media (min-width: 1280px) {
    width: 400px;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const RadioField = styled(Field)`
  cursor: pointer;
`;

export const RecipeTypeTitle = styled.span`
  color: #ff723e;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const IngredientsListWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AdditionalIngredientBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 0;
  border: 1px solid rgb(255, 114, 62);
  background-color: rgb(255, 114, 62);
  color: #000000;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #ffffff;
  }
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const AdditionalIngredientBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IngredientMeasureWrapper = styled.div`
  position: relative;
`;

export const MeasureSelect = styled(Field)`
  font-size: 20px;
  position: absolute;
  top: 2px;
  right: 0px;
  height: 80%;
  border: none;
  border-left: 1px solid rgb(255, 114, 62);
  background-color: transparent;
  color: rgb(255, 114, 62);
  padding: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
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

export const ErrorMsgStyled = styled(ErrorMessage)`
  color: red;
`;
