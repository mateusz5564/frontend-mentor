import { useParams, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const history = useHistory();
  let countryObj;

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(res => res.json())
      .then(json => {
        countryObj = generateCountryObj(json[0]);
        const borderCountriesURL = countryObj.borders.join(";");
        return fetch(`https://restcountries.eu/rest/v2/alpha?codes=${borderCountriesURL}`);
      })
      .then(res => res.json())
      .then(json => {
        countryObj.borders = json.status === 400 ? [] : json.map(country => country.name);
        setCountry(countryObj);
      })
      .catch(err => console.log(err));
  }, [name]);

  const generateCountryObj = countryJson => {
    return {
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
    };
  };

  const renderBorderCountries = borderCountries => {
    return borderCountries.map(country => {
      return (
        <li key={country}>
          <CountryLink to={`/country/${country}`}>{country}</CountryLink>
        </li>
      );
    });
  };

  if (country) {
    return (
      <CountryWrapper>
        <BackLink onClick={() => history.goBack()}>
          <BsArrowLeft style={{ fontSize: "1.5em" }}></BsArrowLeft>
          <span>Back</span>
        </BackLink>
        <img src={country.flag} alt="" />
        <h2>{country.name}</h2>
        <div>
          <p>
            <span>Native name:</span> {country.nativeName}
          </p>
          <p>
            <span>Population:</span> {country.population}
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
        </div>
        <div>
          <p>
            <span>Top Level Domain:</span> {country.topLevelDomain}
          </p>
          <p>
            <span>Currencies:</span> {country.currencies.join(", ")}
          </p>
          <p>
            <span>Languages:</span> {country.languages.join(", ")}
          </p>
        </div>
        <BorderCountries>
          <h3>Border Countries:</h3>
          <ul>{renderBorderCountries(country.borders)}</ul>
        </BorderCountries>
      </CountryWrapper>
    );
  } else {
    return <></>;
  }
};

const CountryWrapper = styled.article`
  color: ${({ theme }) => theme.colors.text};

  img {
    width: 100%;
  }

  h2 {
    margin: 30px 0 20px;
    font-weight: 600;
  }

  p {
    margin: 10px 0;

    span {
      font-weight: 600;
    }
  }

  div {
    margin-bottom: 40px;
  }
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin: 20px 0 60px;
  padding: 8px 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  span {
    margin: 0 5px;
  }
`;

const BorderCountries = styled.div`
  h3 {
    margin-bottom: 1.2em;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.3em;
  }

  li {
    list-style: none;
    margin: 0 0.3em;
    margin-bottom: 0.5em;
    border-radius: 4px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }
`;

const CountryLink = styled(Link)`
  display: inline-block;
  padding: 0.5em 1.2em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export default Country;
