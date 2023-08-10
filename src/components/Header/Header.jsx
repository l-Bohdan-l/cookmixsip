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
const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <CompanyName>
          Cook<CompanyNameSpan>Mix</CompanyNameSpan>Sip
        </CompanyName>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Cocktails</NavItem>
          <NavItem>Recipes</NavItem>
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
