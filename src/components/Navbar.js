import { useContext } from 'react';
import { Link } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const Navbar = ({ setDarkTheme }) => {
  const themeContext = useContext(ThemeContext);


  const onClick = () => {
    setDarkTheme(prevState => !prevState);
  };

  return (
    <StyledNavbar>
    <StyledLink to="/">
      <Heading>Where in the world?</Heading>
    </StyledLink>
      <Button onClick={onClick}>
        {themeContext.mode === "light" && <IoMoonOutline style={{ marginRight: "10px" }} />}
        {themeContext.mode === "dark" && <IoMoonSharp style={{ marginRight: "10px", color: themeContext.colors.text }} />}
        Dark Mode
      </Button>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  height: 80px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1em;
`;

const Heading = styled.h1`
  font-size: 1.2em;
  font-weight: 800;
`;

export default Navbar;
