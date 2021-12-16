import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme } from '../../styles/themes';
import Navbar from '../Navbar';

const MockNavbar = () => {
  const themeToggler = jest.fn();

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Navbar themeToggler={themeToggler} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('Navbar', () => {
  it('should show app name and link to the home page', () => {
    render(<MockNavbar />);
    const link = screen.getByText(/where in the world\?/i);
    expect(link).toBeInTheDocument();
  });

  it('should show dark mode button', () => {
    render(<MockNavbar />);
    const btn = screen.getByText(/dark mode/i);
    expect(btn).toBeInTheDocument();
  });
});
