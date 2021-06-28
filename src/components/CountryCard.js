import styled from "styled-components";

const CountryCard = ({ country }) => {
  return (
    <Card>
      <img src={country.flag} alt="" />
      <div className="info">
        <h2>{country.name}</h2>
        <p>
          <span>Population:</span> {country.population}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.element};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  height: 100%;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .info {
    padding: 20px;

    h2 {
      margin-bottom: 1em;
    }

    p {
      margin: 0.6em 0;
    }
  }

  span {
    font-weight: 600;
  }
`;

export default CountryCard;
