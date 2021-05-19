import {useState} from 'react';
import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/globalStyles";
import themes from "./styles/themes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="App">
    <ThemeProvider theme={darkTheme ? themes.dark : themes.light}>
    <GlobalStyles />
        <Navbar setDarkTheme={setDarkTheme} />
        <main>content</main>
      </ThemeProvider>
    </div>
  );
}

export default App;
