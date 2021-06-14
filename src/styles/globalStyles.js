import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Girassol&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}

`;
