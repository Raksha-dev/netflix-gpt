import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
