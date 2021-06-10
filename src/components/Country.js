import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
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
        console.log(countryObj)
      })
      .catch(err => console.log(err))
  }, [name]);

  const generateCountryObj = countryJson => {
    return {
      flag: countryJson.flag,
      name: countryJson.name,
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

  const renderListItems = (obj, key) => {
    return obj[key].map(item => {
      return (
        <li key={item}>{item}</li>
      )
    })
  }

  if (country) {
    return (
      <>
        <Img src={country.flag} alt="" />
        <h2>{country.name}</h2>
        <div>
          <p>Native name: {country.nativeName}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Sub regiom: {country.subregion}</p>
          <p>Capital: {country.capital}</p>
        </div>
        <div>
          <p>Top Level Domain: {country.topLevelDomain}</p>
          <p>Currencies: {country.currencies.join(", ")}</p>
          <p>Languages: {country.languages.join(", ")}</p>
        </div>
        <div>
          <h3>Border Countries:</h3>
          <ul>
            {renderListItems(country, "borders")}
          </ul>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

const Img = styled.img`
  width: 100%;
`;

export default Country;
