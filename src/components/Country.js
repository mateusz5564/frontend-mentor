import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styled from "styled-components";
import BackLink from "./BackLink";
import SkeletonCountry from "./SkeletonCountry";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [status, setStatus] = useState("idle");
  let countryObj;

  useEffect(() => {
    setStatus("fetching");
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(res => res.json())
      .then(json => {
        countryObj = generateCountryObj(json[0]);
        const borderCountriesURL = countryObj.borders.join(";");
        if (countryObj.borders.length !== 0) {
          fetch(`https://restcountries.eu/rest/v2/alpha?codes=${borderCountriesURL}`)
            .then(res => res.json())
            .then(json => {
              countryObj.borders = json.status === 400 ? [] : json.map(country => country.name);
              setCountry(countryObj);
              setStatus("finished");
            });
        } else {
          setCountry(countryObj);
          setStatus("finished");
        }
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

  if (status === "finished") {
    return (
      <Wrapper>
        <BackLink />
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
                <span>Population:</span> {country.population.toLocaleString("en-US")}
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
                <span>Currencies:</span> {country.currencies.join(", ")}
              </p>
              <p>
                <span>Languages:</span> {country.languages.join(", ")}
              </p>
            </TextCol2>
            <BorderCountries>
              <h3>Border Countries:</h3>
              <ul>{renderBorderCountries(country.borders)}</ul>
            </BorderCountries>
          </TextWrapper>
        </DataWrapper>
      </Wrapper>

      
    );
  } else if (status === "fetching") {
    return (
      <>
        <BackLink />
        <SkeletonCountry />
      </>
    );
  } else {
    return <></>;
  }
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

export const DataWrapper = styled.article`
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

export const TextWrapper = styled.div`
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

export const TextCol1 = styled.div`
  margin-bottom: 40px;

  @media (min-width: 600px) {
    margin-right: 40px;
  }
`;
export const TextCol2 = styled.div`
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
`;

export default Country;
