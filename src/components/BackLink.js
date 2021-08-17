import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

const BackLink = () => {
  const history = useHistory();

  return (
    <GoBack href="" onClick={() => history.goBack()}>
      <BsArrowLeft style={{ fontSize: '1.5em' }} />
      <span>Back</span>
    </GoBack>
  );
};

export default BackLink;

const GoBack = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 20px 0 60px;
  padding: 8px 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  border: transparent;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.element};

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.focusBorder};
  }

  span {
    margin: 0 5px;
  }
`;
