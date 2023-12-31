import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionStyled = styled.section`
  padding-top: 30px;
  padding-bottom: 20px;
  position: relative;
`;

export const RecipeName = styled.h2`
  color: #e2e2e2;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.072px;
  margin-bottom: 10px;
  text-transform: capitalize;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

export const RecipeImage = styled.img`
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
  justify-content: flex-start;
  align-items: flex-start;
  list-style: inside;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
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
    &:not(:last-child) {
      margin-bottom: 0px;
    }
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
  margin-top: 20px;
  text-align: center;
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const UrlTitle = styled.h3`
  color: #e2e2e2;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06px;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Url = styled.a`
  color: #e2e2e2;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.051px;
  margin-bottom: 20px;
  text-align: justify;
  text-justify: inter-word;
  cursor: pointer;
  text-align: center;
  display: block;

  &:hover {
    color: rgb(255, 114, 62);
    text-decoration: underline;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const UrlNone = styled.p`
  color: #e2e2e2;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.051px;
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

export const YoutubeLink = styled.a`
  position: relative;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.051px;
  margin-bottom: 10px;
  color: #e2e2e2;
  letter-spacing: 0.051px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:focus {
    /* background-color: #000;
    color: #e2e2e2; */
    /* text-decoration: underline; */
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #e2e2e2;
    transition: all 250ms ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const YoutubeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const DeleteButton = styled.button`
  width: 60px;
  background-color: #c91212c4;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #c91212c4;
  }
`;

export const EditButton = styled(Link)`
  width: 60px;
  height: 35px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #666666;
  color: #000000;
  border-radius: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #714f1e;
    color: #ffffff;
  }
`;

export const DeleteTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #ff723e;
  text-align: center;
  margin-bottom: 15px;
  text-transform: capitalize;
`;

export const ConfirmDeleteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ConfirmDeleteButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DeclineButton = styled.button`
  width: 60px;
  height: 35px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #666666;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #714f1e;
    color: #ffffff;
  }
`;
