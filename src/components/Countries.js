import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { useEffect, useState } from "react";
import SkeletonCountryCard from "./SkeletonCountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("fetching");
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => {
        return res.json();
      })
      .then(json => {
        setCountries(json);
        setStatus("finished");
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

  const renderSkeletons = () => {
    const ids = [0, 1, 2, 3, 4, 5, 6, 7];

    return ids.map(id => {
      return <SkeletonCountryCard key={id} />;
    });
  };

  if (status === "finished") {
    return <CountriesWrapper>{renderCountries()}</CountriesWrapper>;
  } else if (status === "fetching") {
    return <CountriesWrapper>{renderSkeletons()}</CountriesWrapper>;
  } else {
    return <></>;
  }
};

const CountriesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export default Countries;
