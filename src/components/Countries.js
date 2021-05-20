import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const Countries = () => {
  const name = "germany";

  return (
    <>
      <h2>Countries</h2>
      <Link to={`/country/${name}`}>
        <CountryCard></CountryCard>
      </Link>
    </>
  );
};

export default Countries;
