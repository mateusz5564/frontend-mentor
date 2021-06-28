import styled from 'styled-components';
import { IoSearchSharp } from "react-icons/io5";

const SearchField = ({onChange}) => {

  return ( 
    <Wrapper>
      <SearchIcon />
      <Input type="text" placeholder="Search for a country..." onChange={(e) => onChange(e.target.value)}/>
    </Wrapper>
   );
}
 
const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: 60px;
  background-color: ${({theme}) => theme.colors.element };
  margin-bottom: 20px;
`;

const SearchIcon = styled(IoSearchSharp)`
  font-size: 1.5em;
  margin: 0 20px;
  color: ${({theme}) => theme.colors.textPlaceholder };
`;

const Input = styled.input`
  height: 100%;
  border: none;
  background-color: ${({theme}) => theme.colors.element };
  padding-right: 15px;
  color: ${({theme}) => theme.colors.text };

  ::placeholder {
    color: ${({theme}) => theme.colors.textPlaceholder };
  }
`;

export default SearchField;