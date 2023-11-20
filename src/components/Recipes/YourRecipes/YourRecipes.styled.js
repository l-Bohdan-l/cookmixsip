import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import styled from "styled-components";

export const SectionStyled = styled.section`
  padding-top: 10px;
  padding-bottom: 10px;
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

export const AddBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

export const AddLink = styled(Link)`
  /* border: 1px solid transparent;
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
  /* } */
  margin: 0;
`;

export const AddIcon = styled(AiFillPlusCircle)`
  color: #ff723e;
  font-size: 30px;
  &:hover {
    color: #fff;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  /* flex-wrap: wrap; */
  margin-bottom: 10px;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const LinkStyled = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  width: 100%;
  /* padding: 15px 10px; */
  /* border-bottom: 1px solid #ff723e; */
  /* height: 100%; */
  /* transition: all 250ms ease-in-out; */

  /* cursor: pointer; */
  /* overflow: scroll; */

  /* background-color: rgb(57 56 56 / 27%);
  border-radius: 20px; */

  /* &:hover {
    box-shadow: 0px 0px 10px 0px #ff723e;
    transform: scale(1.05);
  } */

  /* @media screen and (min-width: 1280px) {
    height: 150px;
    width: 48%;
    flex-direction: row;
    justify-content: center;
    font-size: 25px;
    flex-wrap: wrap;
  } */

  font-size: 20px;
  font-weight: 500;
  color: #ff723e;
  text-align: center;
  /* margin-bottom: 5px; */
  text-transform: capitalize;
`;

export const ListItem = styled.li`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 5px;

  border-bottom: 1px solid #ff723e;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  background-color: rgb(57 56 56 / 27%);
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 0px 10px 0px #ff723e;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    height: 150px;
    width: 48%;
    flex-direction: row;
    justify-content: center;
    font-size: 25px;
    flex-wrap: wrap;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  bottom: 3px;
  right: 3px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  padding: 5px;
  border-radius: 50%;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px #ff723e;
  }
`;

export const DeleteIcon = styled(RiDeleteBin2Fill)`
  color: #c10808eb;
  font-size: 18px;
  @media screen and (min-width: 1280px) {
    font-size: 22px;
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

export const ConfirmDeleteButton = styled.button`
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
