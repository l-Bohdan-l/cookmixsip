import { useSelector } from "react-redux";
import {
  selectAuthName,
  selectAuthEmail,
  selectIsLoggedIn,
  selectAuthId,
} from "../selectors/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authName = useSelector(selectAuthName);
  const authEmail = useSelector(selectAuthEmail);
  const authId = useSelector(selectAuthId);
  return { authName, authEmail, isLoggedIn, authId };
};
