import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => {
        return res.json();
      })
      .then(json => {
        setCountries(json);
      });
  }, []);

  const renderCountries = () => {
    return countries.map(country => {
      return (
        <CardLink key={country.alpha3Code} to={`/country/${country.name}`}>
          <CountryCard country={country}></CountryCard>
        </CardLink>
      );
    });
  };

  return <React.Fragment>{renderCountries()}</React.Fragment>;
};

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export default Countries;
