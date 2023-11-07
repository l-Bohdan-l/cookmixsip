import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { clearCredentials, setCredentials } from "./authSlice";

export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      dispatch(
        setCredentials({
          userId: user.uid,
          name: user.displayName,
          email: user.email,
        })
      );
    } catch (error) {
      console.log("error", error);
      console.log("error", error.message);
    }
  };

export const authSignUp =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await updateProfile(user, { displayName: login });
      dispatch(
        setCredentials({
          userId: user.uid,
          name: user.displayName,
          email: user.email,
        })
      );
    } catch (error) {
      console.log("error", error);
      console.log("error", error.message);
    }
  };

export const authSignOut = (data) => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(clearCredentials());
  } catch (error) {
    console.log("error", error);
    console.log("error", error.message);
  }
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setCredentials({
            userId: user.uid,
            name: user.displayName,
            email: user.email,
          })
        );
      }
    });
  } catch (error) {
    console.log(" authStateChangeUser error", error);
    console.log("authStateChangeUser error", error.message);
  }
};
