import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useMemo, useState } from 'react';
import { AppRoutes } from '../../pages/routes';
import store from '../../store';
import { GlobalStyles } from '../../assets/styles/Global';
import { Header } from '../Header';
import { Container } from './styles';
import themes from '../../assets/styles/themes';

function App() {
  const [theme, setTheme] = useState('light');
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
