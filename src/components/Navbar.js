import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = ({ setDarkTheme }) => {
  const onClick = () => {
    setDarkTheme(prevState => !prevState);
  };

  return (
    <StyledNavbar>
    <HomeLink to="/">
      <Heading>Where in the world?</Heading>
    </HomeLink>
      <Button onClick={onClick}>
        <IoMoonOutline style={{ marginRight: "10px" }} />
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
  color: ${({ theme }) => theme.colors.text}; ;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.element};
  border: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1em;
`;

const Heading = styled.h1`
  font-size: 1.2em;
  font-weight: 800;
`;

export default Navbar;
