import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import Navbar from './components/Navbar';
import Countries from './components/Countries';
import Country from './components/Country';
import { useDarkMode } from './components/useDarkMode';

function App() {
  const [theme, themeToggler] = useDarkMode();

  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <Navbar themeToggler={themeToggler} />
          <Main>
            <Switch>
              <Route exact path="/">
                <Countries />
              </Route>
              <Route path="/country/:name">
                <Country />
              </Route>
            </Switch>
          </Main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
`;

export default App;
