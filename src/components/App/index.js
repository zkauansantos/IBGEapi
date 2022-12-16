import { Provider } from 'react-redux';
import { AppRoutes } from '../../pages/routes';
import store from '../../store';
import { GlobalStyles } from '../../assets/styles/Global';
import { Header } from '../Header';
import { Container } from './styles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </Provider>
  );
}

export default App;
