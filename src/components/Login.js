import Header from "./Header";
import Footer from "./Footer";
import { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signUpHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const checkValidations = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/144803737?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute top-[30%] left-[37%] text-white px-[68px] pt-[60px] pb-[40px] w-3/12 z-10"
      >
        <h1 className="text-2xl mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        <div>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full my-2 p-2 bg-gray-500 rounded-md"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="w-full my-2 p-2 bg-gray-500 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full my-2 p-2 bg-gray-500 rounded-md"
          />
        </div>
        <p className="text-red-700">{errorMessage}</p>
        <button
          className="w-full my-2 p-2 bg-red-700 rounded-md my-4"
          onClick={checkValidations}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-sm flex justify-between mb-7">
          <div>
            <input type="checkbox" /> <label>Remember me</label>
          </div>
          <label>Need help?</label>
        </div>
        <p className="text-sm text-gray-300 mb-7">
          {isSignIn ? "New to Netflix?" : "Already registered?"}

          <a onClick={signUpHandler} className="text-sm text-white ml-2">
            {isSignIn ? "Sign up now" : "Sign In"}
          </a>
        </p>
        <p className="text-sm text-gray-300">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <button>Learn more.</button>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
