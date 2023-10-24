import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { addGptSearch } from "../utils/redux/gptSlice";
import { SUPPORTED_LANG } from "../utils/langConst";
import { changeLanguage } from "../utils/redux/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.gptSearchEnable);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser);
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // User is signed in
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
      }
    });
    //Unsubscribe when the component is unmount, since it was getting called every time when the header was loaded every time.
    return () => unSubscribe();
  }, []);

  const handleGptSearchPage = () => {
    dispatch(addGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex items-center">
          <button
            className="p-2 mr-2 bg-white rounded-md"
            onClick={handleGptSearchPage}
          >
            {gptSearch ? "Browse" : "GPT Search"}
          </button>
          <img className="w-10 h-10 mr-2" src={user?.photoURL} alt="userIcon" />
          <button className="text-white pr-2" onClick={handleSignOut}>
            Sign Out
          </button>
          <select className="w-30 m-4 p-2" onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Header;
