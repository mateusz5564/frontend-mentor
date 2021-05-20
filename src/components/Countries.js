import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Countries = () => {
  const name = "germany";

  return (
    <>
      <CardLink to={`/country/${name}`}>
        <CountryCard></CountryCard>
      </CardLink>
    </>
  );
};

const CardLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.text}
`;

export default Countries;
