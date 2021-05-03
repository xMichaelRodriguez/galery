import { Provider } from "react-redux";
import { RouterScreen } from "./Routes/RouterScreen";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterScreen />
    </Provider>
  );
}

export default App;
