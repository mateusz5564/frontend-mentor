import { useContext } from 'react';
import { Link } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const Navbar = ({ themeToggler }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledNavbar>
    <StyledLink to="/">
      <Heading>Where in the world?</Heading>
    </StyledLink>
      <Button onClick={themeToggler}>
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
  box-shadow: ${({ theme }) => theme.shadowElement};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors.focusBorder};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1em;
  cursor: pointer;

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors.focusBorder};
  }
`;

const Heading = styled.h1`
  font-size: 1.2em;
  font-weight: 800;
`;

export default Navbar;
