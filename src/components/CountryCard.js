import styled from 'styled-components';

const CountryCard = ({country}) => {


  return ( 
    <Card>
      <Img src={country.flag}/>
      <Info>
        <h2>{country.name}</h2>
        <p><Span>Population: {country.population}</Span></p>
        <p><Span>Region: {country.region}</Span></p>
        <p><Span>Capital: {country.capital}</Span></p>
      </Info>
    </Card>
   );
}

const Card = styled.div`
  background-color: ${({theme}) => theme.colors.element};
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
`;
 
const Img = styled.img`
  width: 100%;
`;

const Info = styled.div`
  padding: 20px;
`;

const Span = styled.span`
  font-weight: 600;
`;

export default CountryCard;