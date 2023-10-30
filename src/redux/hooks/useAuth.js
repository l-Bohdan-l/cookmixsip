import { useSelector } from "react-redux";
import {
  selectAuthName,
  selectAuthEmail,
  selectIsLoggedIn,
} from "../selectors/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authName = useSelector(selectAuthName);
  const authEmail = useSelector(selectAuthEmail);
  return { authName, authEmail, isLoggedIn };
};
