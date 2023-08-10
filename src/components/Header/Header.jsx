// import { CompanyName, Header } from "./Header.styled";
import { Modal } from "../Modal/Modal";
import {
  HeaderStyled,
  CompanyName,
  NavList,
  CompanyNameSpan,
  Wrapper,
  NavItem,
  LangWrapper,
  FlagImg,
  LangText,
} from "./Header.styled";
import usaFlag from "../../images/usa-flag.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <CompanyName>
          Cook<CompanyNameSpan>Mix</CompanyNameSpan>Sip
        </CompanyName>
        <NavList>
          <NavItem to="/">Home</NavItem>
          <NavItem to="cocktails">Cocktails</NavItem>
          <NavItem to="recipes">Recipes</NavItem>
          {/* <NavLink>Home</NavLink>
          <NavLink>Cocktails</NavLink>
          <NavLink>Recipes</NavLink> */}
        </NavList>
        <LangWrapper>
          <FlagImg src={usaFlag} alt="usa flag" />
          <LangText>ENG</LangText>
        </LangWrapper>
        <Modal />
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
