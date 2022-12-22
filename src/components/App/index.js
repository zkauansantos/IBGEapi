import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useMemo } from 'react';
import { AppRoutes } from '../../pages/routes';
import store from '../../store';
import { GlobalStyles } from '../../assets/styles/Global';
import { Header } from '../Header';
import { Container } from './styles';
import themes from '../../assets/styles/themes';
import useTheme from '../../hooks/useTheme';

function App() {
  const [theme, setTheme] = useTheme('theme', 'light');
  const currentTheme = useMemo(() => themes[theme] || themes.light, [theme]);

  function handleToogleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Container>
          <Header
            selectedTheme={theme}
            onToggleTheme={handleToogleTheme}
          />
          <AppRoutes />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
