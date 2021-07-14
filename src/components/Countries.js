import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CountryCard from "./CountryCard";
import SkeletonCountryCard from "./SkeletonCountryCard";
import SearchField from "./SearchField";
import Select from "./Select";

const Countries = () => {
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [status, setStatus] = useState("idle");
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("");
  const allCountries = useRef([]);

  const selectOptions = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  const filteredCountries = () => {
    return allCountries.current
      .filter(country =>
        countryName ? country.name.toLowerCase().includes(countryName.toLowerCase()) : true
      )
      .filter(country =>
        region ? country.region.toLowerCase().includes(region.toLowerCase()) : true
      );
  };

  useEffect(() => {
    setStatus("fetching");
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => {
        return res.json();
      })
      .then(json => {
        allCountries.current = json;
        setVisibleCountries(filteredCountries());
        setStatus("finished");
      });
  }, []);

  useEffect(() => {
    setVisibleCountries(filteredCountries());
  }, [countryName, region]);

  const onRegionChange = option => {
    if (!option) {
      setRegion("");
      return;
    }
    setRegion(option.value);
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
      <FiltersWrapper>
        <StyledSearchField value={countryName} setValue={setCountryName} />
        <StyledSelect
          placeholder="Filter by Region"
          isClearable={true}
          options={selectOptions}
          onChange={onRegionChange}
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
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.focusBorder};
  }
`;

export default Countries;
