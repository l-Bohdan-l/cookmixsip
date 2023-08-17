import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionStyled = styled.section`
  /* background-color: antiquewhite; */
  margin-bottom: 40px;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const SearchFieldStyled = styled.input`
  border: none;
  border-bottom: 2px solid #ff723e;
  background-color: rgb(57 56 56 / 27%);
  width: 100%;

  border-radius: 5px;
  padding: 5px;
  font-size: 17px;
  color: #ff723e;

  &:focus {
    outline: none;
  }

  @media (min-width: 1280px) {
    width: 500px;
    font-size: 20px;
    padding: 10px;
  }
`;

export const LabelSearchStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 20px; */
  color: #ff723e;
  font-size: 20px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 25px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* gap: 15px; */
  margin-top: 10px;
  @media screen and (min-width: 1280px) {
    margin-top: 20px;
  }
`;

export const SearchBtn = styled.button`
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #ff723e;
  color: #fff;
  font-size: 17px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  margin-left: 15px;
  &:hover {
    background-color: #fff;
    color: #ff723e;
    border: 1px solid #ff723e;
    /* margin-left: 13px; */
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    padding: 10px 20px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const ListItem = styled(Link)`
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 5px #000000;
  }
`;

export const ListItemWrapper = styled.div`
  position: relative;
  width: 290px;
  height: 290px;
`;

export const RecipeName = styled.h3`
  color: #e2e2e2;
  text-shadow: 0px 0px 5px #000000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  letter-spacing: 0.072px;
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 24px */
    letter-spacing: 0.09px;
    margin-bottom: 10px;
  }
`;

export const RecipeDescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(183 91 0 / 45%);
  padding: 10px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 5px #000000;
  border-radius: 0 0 15px 15px;
`;

export const RecipeImg = styled.img`
  border-radius: 15px;
`;
