import { useDispatch } from "react-redux";
import { Modal } from "../Modal/Modal";
import {
  HeaderStyled,
  CompanyName,
  NavList,
  CompanyNameSpan,
  Wrapper,
  NavItem,
  LangWrapper,
  LogoutBtn,
  UserName,
  UserEmail,
  UserInfoWrapper,
} from "./Header.styled";
import { useAuth } from "../../redux/hooks/useAuth";
import { authSignOut } from "../../redux/auth/authOperations";
const Header = () => {
  const { isLoggedIn, authEmail, authName } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authSignOut());
  };
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
          {!isLoggedIn && (
            <>
              <NavItem to="login">Login</NavItem>
              <NavItem to="register">Register</NavItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <UserInfoWrapper>
                <UserName>{authName}</UserName>
                <UserEmail>{authEmail}</UserEmail>
              </UserInfoWrapper>
              <LogoutBtn onClick={handleLogout} type="button">
                Logout
              </LogoutBtn>
            </>
          )}
        </LangWrapper>
        <Modal />
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
