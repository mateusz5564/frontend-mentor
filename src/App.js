import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import GlobalStyles from "./styles/globalStyles";
import themes from "./styles/themes";
import Navbar from "./components/Navbar";
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={darkTheme ? themes.dark : themes.light}>
          <GlobalStyles />
          <Navbar setDarkTheme={setDarkTheme} />
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
        </ThemeProvider>
      </div>
    </Router>
  );
}

const Main = styled.main`
  padding: 20px;
`;

export default App;
