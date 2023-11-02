import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import {
  //   authStateChange,
  //   authUserSignOut,
  clearCredentials,
  setCredentials,
  //   updateUserProfile,
} from "./authSlice";

export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          //   const user = userCredential.user;
          //   console.log("user", user);
          // dispatch(updateUserProfile(user.uid));
        }
      );
      const user = auth.currentUser;
      dispatch(
        setCredentials({
          userId: user.uid,
          name: user.displayName,
          email: user.email,
        })
      );
      //   await updateProfile(user, { displayName: login });
      // console.log("user", user);
      // dispatch(
      //   updateUserProfile({ userId: user.uid, nickname: user.displayName })
      // );
    } catch (error) {
      console.log("error", error);
      console.log("error", error.message);
    }
  };
export const authSignUp =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          // dispatch(updateUserProfile({ userId: user.uid }));
        }
      );
      const user = auth.currentUser;
      await updateProfile(user, { displayName: login });
      dispatch(
        // updateUserProfile({ userId: user.uid, nickname: user.displayName })
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
    // dispatch(authUserSignOut());
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
        // dispatch(
        //   updateUserProfile({ userId: user.uid, nickname: user.displayName })
        // );
        // dispatch(authStateChange({ stateChange: true }));
        console.log(user);
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
