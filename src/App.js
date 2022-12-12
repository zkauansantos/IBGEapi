import { ContainerSelects } from "./components/ContainerSelects";
import { Header } from "./components/Header";
import { SelectState } from "./components/SelectState";
import { GlobalStyles } from './styles/GlobalStyles'


function App() {
  return (
  <>
    <GlobalStyles/>
    <Header/>
    <ContainerSelects/>
  </>
  )
}

export default App;
