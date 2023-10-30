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
  // FlagImg,
  // LangText,
} from "./Header.styled";
import { useAuth } from "../../redux/hooks/useAuth";
// import usaFlag from "../../images/usa-flag.png";
// import { NavLink } from "react-router-dom";
const Header = () => {
  const { isLoggedIn } = useAuth;
  return (
    <HeaderStyled>
      <Wrapper>
        <CompanyName>
          Cook<CompanyNameSpan>Mix</CompanyNameSpan>Sip
        </CompanyName>
        <NavList>
          <NavItem to="/">Home</NavItem>
          <NavItem to="cocktails">Cocktails</NavItem>
          <NavItem to="meals">Meals</NavItem>
          {isLoggedIn && <NavItem to="your-recipes">Your recipes</NavItem>}
        </NavList>
        <LangWrapper>
          {/* <FlagImg src={usaFlag} alt="usa flag" />
          <LangText>ENG</LangText> */}
          <NavItem to="login">Login</NavItem>
          <NavItem to="register">Register</NavItem>
        </LangWrapper>
        <Modal />
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
