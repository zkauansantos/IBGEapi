import { Provider } from "react-redux";
import { AppRoutes } from "./pages/routes";
import store from "./store";
import { GlobalStyles } from "./assets/styles/Global";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppRoutes />
    </Provider>
  );
}

export default App;
