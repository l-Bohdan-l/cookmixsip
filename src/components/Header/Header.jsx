// import { CompanyName, Header } from "./Header.styled";
import { Modal } from "../Modal/Modal";
import {
  HeaderStyled,
  CompanyName,
  NavList,
  CompanyNameSpan,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <CompanyName>
        Cook<CompanyNameSpan>Mix</CompanyNameSpan>Sip
      </CompanyName>
      <NavList>
        <li>Home</li>
        <li>Cocktails</li>
        <li>Recipes</li>
      </NavList>
      <Modal />
    </HeaderStyled>
  );
};

export default Header;
