import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Browse from "./Browse";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        // User is signed in
      } else {
        dispatch(removeUser());
        // User is signed out
      }
    });
  }, []);

  return <RouterProvider router={routers} />;
};

export default Body;
