import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import BackLink from './BackLink';
import SkeletonCountry from './SkeletonCountry';

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  const FETCH_COUNTRY = 'FETCH_COUNTRY';
  const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
  const FETCH_COUNTRY_ERROR = 'FETCH_COUNTRY_ERROR';
  const FETCH_NEW_COUNTRY = 'FETCH_NEW_COUNTRY';

  const states = {
    idle: 'idle',
    isLoading: 'loading',
    hasLoaded: 'loaded',
    hasError: 'error',
  };

  const [currentState, setCurrentState] = useState(states.idle);

  const stateTransitions = {
    [states.idle]: {
      [FETCH_COUNTRY]: states.isLoading,
    },
    [states.isLoading]: {
      [FETCH_COUNTRY_SUCCESS]: states.hasLoaded,
      [FETCH_COUNTRY_ERROR]: states.hasError,
    },
    [states.hasLoaded]: {
      [FETCH_NEW_COUNTRY]: states.idle,
    },
    [states.hasError]: {
      [FETCH_COUNTRY]: states.isLoading,
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

  const generateCountryObj = countryJson => ({
    flag: countryJson.flag,
    name: countryJson.name,
    nativeName: countryJson.nativeName,
    population: countryJson.population,
    region: countryJson.region,
    subregion: countryJson.subregion,
    capital: countryJson.capital,
    topLevelDomain: countryJson.topLevelDomain[0],
    currencies: countryJson.currencies.map(currency => currency.name),
    languages: countryJson.languages.map(lang => lang.name),
    borders: countryJson.borders,
  });

  useEffect(() => {
    updateState(FETCH_COUNTRY);
    let countryObj;
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(res => res.json())
      .then(countryJson => {
        countryObj = generateCountryObj(countryJson[0]);
        const borderCountriesURL = countryObj.borders.join(';');
        if (countryObj.borders.length !== 0) {
          fetch(`https://restcountries.eu/rest/v2/alpha?codes=${borderCountriesURL}`)
            .then(res => res.json())
            .then(borderCountriesJson => {
              countryObj.borders =
                borderCountriesJson.status === 400 ? [] : borderCountriesJson.map(borderCountry => borderCountry.name);
              setCountry(countryObj);
              updateState(FETCH_COUNTRY_SUCCESS);
            });
        } else {
          setCountry(countryObj);
          updateState(FETCH_COUNTRY_SUCCESS);
        }
      })
      .catch(err => {
        console.log(err);
        updateState(FETCH_COUNTRY_ERROR);
      });

    return () => {
      updateState(FETCH_NEW_COUNTRY);
    };
  }, [name]);

  const renderBorderCountries = bCountries =>
    bCountries.map(bCountry => (
      <li key={bCountry}>
        <CountryLink to={`/country/${bCountry}`}>{bCountry}</CountryLink>
      </li>
    ));

  const skeletonWrappers = { DataWrapper, TextWrapper, TextCol1, TextCol2 };

  return (
    <Wrapper>
      <BackLink />
      {compareState(states.isLoading) && <SkeletonCountry {...skeletonWrappers} />}
      {compareState(states.hasLoaded) && (
        <DataWrapper>
          <Flag>
            <img src={country.flag} alt="" />
          </Flag>
          <TextWrapper>
            <CountryName>{country.name}</CountryName>
            <TextCol1>
              <p>
                <span>Native name:</span> {country.nativeName}
              </p>
              <p>
                <span>Population:</span> {country.population.toLocaleString()}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Sub region:</span> {country.subregion}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </TextCol1>
            <TextCol2>
              <p>
                <span>Top Level Domain:</span> {country.topLevelDomain}
              </p>
              <p>
                <span>Currencies:</span> {country.currencies.join(', ')}
              </p>
              <p>
                <span>Languages:</span> {country.languages.join(', ')}
              </p>
            </TextCol2>
            <BorderCountries>
              <h3>Border Countries:</h3>
              <ul>{renderBorderCountries(country.borders)}</ul>
            </BorderCountries>
          </TextWrapper>
        </DataWrapper>
      )}
      {compareState(states.hasError) && <p>Error...</p>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};

  p {
    margin: 10px 0;

    span {
      font-weight: 600;
    }
  }
`;

const DataWrapper = styled.article`
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
  }
`;

const Flag = styled.div`
  img {
    width: 100%;
  }

  @media (min-width: 600px) {
    flex-basis: 100%;
  }

  @media (min-width: 900px) {
    flex-basis: 50%;
    flex-shrink: 0;
    margin-right: 50px;
  }

  @media (min-width: 1200px) {
    margin-right: 100px;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const CountryName = styled.h2`
  margin: 30px 0 20px;
  font-weight: 600;
  flex-basis: 100%;
`;

const TextCol1 = styled.div`
  margin-bottom: 40px;

  @media (min-width: 600px) {
    margin-right: 40px;
  }
`;

const TextCol2 = styled.div`
  margin-bottom: 40px;
`;

const BorderCountries = styled.div`
  flex-basis: 100%;

  h3 {
    margin-bottom: 13px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -7px;
  }

  li {
    list-style: none;
    margin: 7px;
    background-color: ${({ theme }) => theme.colors.element};
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    padding: 20px 0;

    h3 {
      flex-shrink: 0;
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
`;

const CountryLink = styled(Link)`
  display: inline-block;
  padding: 7px 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.focusBorder};
  }
`;

export default Country;
