import { Provider } from "react-redux";
import { ContainerSelects } from "./components/ContainerSelects";
import { Header } from "./components/Header";
import store from "./store";
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles/>
      <Header/>
      <ContainerSelects/>
    </Provider>
  )
}

export default App;
