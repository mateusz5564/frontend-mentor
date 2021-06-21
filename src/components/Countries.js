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
    const ids = [0,1,2,3,4,5,6,7,8];

    return ids.map(id => {
      return <SkeletonCountryCard key={id} />
    })
  }

  if (status === "finished") {
    return <>{renderCountries()}</>;
  } else if (status === "fetching") {
    return <>{renderSkeletons()}</>;
  } else {
    return <></>;
  }
};

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

export default Countries;
