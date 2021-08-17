import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CountryCard from './CountryCard';
import SkeletonCountryCard from './SkeletonCountryCard';
import SearchField from './SearchField';
import Select from './Select';

const Countries = () => {
  const [countryName, setCountryName] = useState('');
  const [regionOpt, setRegionOpt] = useState(null);
  const allCountries = useRef([]);

  const region = regionOpt ? regionOpt.value : '';

  const states = {
    idle: 'idle',
    isLoading: 'loading',
    hasLoaded: 'loaded',
    hasError: 'error',
  };

  const [currentState, setCurrentState] = useState(states.idle);

  const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
  const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
  const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR';

  const stateTransitions = {
    [states.idle]: {
      [FETCH_COUNTRIES]: states.isLoading,
    },
    [states.isLoading]: {
      [FETCH_COUNTRIES_SUCCESS]: states.hasLoaded,
      [FETCH_COUNTRIES_ERROR]: states.hasError,
    },
    [states.hasError]: {
      [FETCH_COUNTRIES]: states.isLoading,
    },
  };

  const transition = (state, action) => {
    const nextState = stateTransitions[state][action];
    return nextState || currentState;
  };

  const updateState = action => {
    setCurrentState(state => transition(state, action));
  };

  const compareState = state => currentState === state;

  const selectOptions = [
    { value: 'africa', label: 'Africa' },
    { value: 'americas', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];

  const getFilteredCountries = () =>
    allCountries.current
      .filter(country => (countryName ? country.name.toLowerCase().includes(countryName.toLowerCase()) : true))
      .filter(country => (region ? country.region.toLowerCase() === region.toLowerCase() : true));

  useEffect(() => {
    updateState(FETCH_COUNTRIES);
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(json => {
        allCountries.current = json;
        updateState(FETCH_COUNTRIES_SUCCESS);
      })
      .catch(() => {
        updateState(FETCH_COUNTRIES_ERROR);
      });
  }, []);

  const renderCountries = () => {
    const filteredCountries = getFilteredCountries();
    if (filteredCountries.length > 0) {
      return filteredCountries.map(country => (
        <CardLink key={country.alpha3Code} to={`/country/${country.name}`}>
          <CountryCard country={country} />
        </CardLink>
      ));
    }
    return <p style={{ justifySelf: 'start' }}>No countries found</p>;
  };

  const renderSkeletons = () => {
    const ids = [0, 1, 2, 3, 4, 5, 6, 7];

    return ids.map(id => <SkeletonCountryCard key={id} />);
  };

  const displayCountries = () => {
    if (compareState(states.hasLoaded)) {
      return <CountriesWrapper>{renderCountries()}</CountriesWrapper>;
    }
    if (compareState(states.isLoading)) {
      return <CountriesWrapper>{renderSkeletons()}</CountriesWrapper>;
    }
    if (compareState(states.hasError)) {
      return <p>Failed to retrieve the data</p>;
    }
  };

  return (
    <>
      <FiltersWrapper>
        <StyledSearchField value={countryName} setValue={setCountryName} aria-label="search for a country" />
        <StyledSelect
          placeholder="Filter by Region"
          isClearable
          options={selectOptions}
          value={regionOpt}
          onChange={opt => setRegionOpt(opt)}
          aria-label="Filter by Region"
        />
      </FiltersWrapper>
      {displayCountries()}
    </>
  );
};

const CountriesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-items: center;
  gap: 30px;
`;

const FiltersWrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledSearchField = styled(SearchField)`
  margin-bottom: 20px;

  @media (min-width: 600px) {
    width: 400px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  max-width: 250px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  border-radius: 10px;

  :focus {
    outline: none;
    box-shadow: 0 0 0 5px ${({ theme }) => theme.colors.focusBorder};
  }
`;

export default Countries;
