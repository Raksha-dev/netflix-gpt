import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {removeUser} from '../utils/redux/userSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser);
        navigate('/');
        // Sign-out successful.
      })
      .catch((error) => {
        navigate('/error');
        // An error happened.
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-[100%] opacity-80 z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex items-center">
        <img
          className="w-10 h-10 mr-2"
          src="https://avatars.githubusercontent.com/u/144803737?v=4"
          alt="userIcon"
        />
        <button className="text-white pr-20" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
