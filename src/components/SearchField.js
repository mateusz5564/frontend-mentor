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
  border-radius: 5px;
`;

const SearchIcon = styled(IoSearchSharp)`
  font-size: 1.5em;
  margin-left: 20px;
  margin-right: 15px;
  color: ${({theme}) => theme.colors.textPlaceholder };
`;

const Input = styled.input`
  height: 100%;
  border: transparent;
  border-radius: 5px;
  font-size: 1em;
  background-color: ${({theme}) => theme.colors.element };
  color: ${({theme}) => theme.colors.text };
  padding-left: 5px;
  padding-right: 10px;

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({theme}) => theme.colors.focusBorder};
  }

  ::placeholder {
    color: ${({theme}) => theme.colors.textPlaceholder };
  }
`;

export default SearchField;