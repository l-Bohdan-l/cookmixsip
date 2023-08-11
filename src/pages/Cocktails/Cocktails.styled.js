import { TextField } from "@mui/material";
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
`;

export const LabelSearchStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 20px; */
  color: #ff723e;
  font-size: 20px;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* gap: 15px; */
  margin-top: 10px;
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
`;

export const List = styled.ul`
  list-style: none;
  background-color: white;
`;
