import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  LogoutBtn,
  UserEmail,
  UserInfoWrapper,
  UserName,
  LoginWrapper,
  LoginLink,
} from "./ModalContent.styled";
import { useAuth } from "../../redux/hooks/useAuth";
import { authSignOut } from "../../redux/auth/authOperations";
const ModalContent = ({ onClose }) => {
  
  const { isLoggedIn, authEmail, authName } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authSignOut());
  };

  return (
    <div>
      <ul>       
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
