import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CountryCard from "./CountryCard";
import SkeletonCountryCard from "./SkeletonCountryCard";
import SearchField from "./SearchField";

const Countries = () => {
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [status, setStatus] = useState("idle");
  const allCountries = useRef([]);

  useEffect(() => {
    setStatus("fetching");
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => {
        return res.json();
      })
      .then(json => {
        allCountries.current = json;
        setVisibleCountries(json);
        setStatus("finished");
      });
  }, []);

  const filterCountries = value => {
    const newCountries = allCountries.current.filter(country =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setVisibleCountries(newCountries);
  };

  const renderCountries = () => {
    return visibleCountries.map(country => {
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

  const displayCountries = () => {
    if (status === "finished") {
      return <CountriesWrapper>{renderCountries()}</CountriesWrapper>;
    } else if (status === "fetching") {
      return <CountriesWrapper>{renderSkeletons()}</CountriesWrapper>;
    } else {
      return <></>;
    }
  };

  return (
    <>
      <SearchField onChange={filterCountries} />
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

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export default Countries;
