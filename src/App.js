import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
