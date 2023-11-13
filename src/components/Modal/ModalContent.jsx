// import { useEffect } from "react";
import {
  ListItem,
  LogoutBtn,
  UserEmail,
  UserInfoWrapper,
  UserName,
  LoginWrapper,
  LoginLink,
} from "./ModalContent.styled";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../redux/hooks/useAuth";
import { useDispatch } from "react-redux";
import { authSignOut } from "../../redux/auth/authOperations";
const ModalContent = ({ onClose }) => {
  // useEffect(() => {
  //   return onClose();
  // }, [onClose]);
  const { isLoggedIn, authEmail, authName } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authSignOut());
  };

  return (
    <div>
      <ul>
        {/* <NavItem to="/">Home</NavItem>
        <NavItem to="cocktails">Cocktails</NavItem>
        <NavItem to="meals">Meals</NavItem> */}
        <ListItem>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="cocktails">Cocktails</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="meals">Meals</NavLink>
        </ListItem>
        {isLoggedIn && (
          <ListItem>
            <NavLink to="your-recipes">Your recipes</NavLink>
          </ListItem>
        )}
      </ul>
      {!isLoggedIn && (
        <LoginWrapper>
          <LoginLink to="login">Login</LoginLink>
          <LoginLink to="register">Register</LoginLink>
        </LoginWrapper>
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
    </div>
  );
};

export default ModalContent;
