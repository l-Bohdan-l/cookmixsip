// import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionStyled = styled.section`
  /* background-color: antiquewhite; */
  margin-bottom: 40px;
  padding-bottom: 20px;
  padding-top: 20px;
`;

// export const SearchFieldStyled = styled(TextField)`
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 15px;
//   /* background-color: antiquewhite; */
//   border-bottom: 1px solid red;
// `;

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
  list-style: none;
`;

export const Item = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #ff723e;
  height: 250px;
  transition: all 250ms ease-in-out;

  cursor: pointer;
  /* overflow: scroll; */
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  background-color: rgb(57 56 56 / 27%);
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 0px 10px 0px #ff723e;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    height: 80px;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #ff723e;
  text-align: center;
  margin-bottom: 5px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ff723e;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const ItemIsAlcoholicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ItemIsAlcoholic = styled.p`
  font-size: 17px;
  font-weight: 700;
  color: #ff723e;
  margin-bottom: 5px;
  /* margin-right: 10px; */
  text-align: center;

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
    font-size: 20px;
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const IngredientItem = styled.li`
  font-size: 17px;
  font-weight: 500;
  color: #ff723e;
  position: relative;

  @media screen and (max-width: 1279px) {
    &:not(:last-child) {
      &::after {
        content: "";
        display: block;
        height: 2px;
        /* height: 100%; */
        width: 20px;
        background-color: #ff723e;
        /* margin: 0 auto; */
        transform: rotate(90deg);
        position: absolute;
        right: -15px;
        top: 50%;
        /* transform: translateY(-50%); */
      }
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const IngerdientsWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;
