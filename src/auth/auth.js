import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const SignUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log(auth.currentUser.providerData);
  } catch (err) {
    console.log(err);
  }
};
export const SignIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log(auth.currentUser.providerData);
  } catch (err) {
    console.error(err);
  }
};

export const SignInWithGoogle = async () => {
  //   const navigate = useNavigate();

  try {
    await signInWithPopup(auth, googleProvider);
    console.log(auth.currentUser.providerData);
    // navigate("/dashboard");
  } catch (err) {
    console.error(err);
  }
};

export const SignOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};
