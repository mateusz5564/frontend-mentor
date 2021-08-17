import styled from 'styled-components';

const CountryCard = ({ country }) => (
  <Card>
    <img src={country.flag} alt="" loading="lazy" />
    <div className="info">
      <h2>{country.name}</h2>
      <p>
        <span>Population:</span> {country.population.toLocaleString()}
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

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.element};
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadowElement};

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
