import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <main>
            <Switch>
              <Route exact path="/">
                <Countries />
              </Route>
              <Route path="/country/:name">
                <Country />
              </Route>
            </Switch>
          </main>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
