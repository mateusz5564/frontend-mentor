import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../styles/themes';
import Countries from '../Countries';

const MockCountries = () => (
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <Countries />
    </ThemeProvider>
  </BrowserRouter>
);

describe('Countries', () => {
  it('filter countries by name', async () => {
    render(<MockCountries />);
    const inputEl = screen.getByPlaceholderText(/search for a country.../i);
    fireEvent.change(inputEl, { target: { value: 'poland' } });
    const polishCountryCard = await screen.findByText(/poland/i);
    const germanCountryCard = await screen.queryByText(/germany/i);
    expect(polishCountryCard).toBeInTheDocument();
    expect(germanCountryCard).not.toBeInTheDocument();
  });
});
