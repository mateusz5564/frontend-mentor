import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const BackLink = () => {
  const history = useHistory();

  return (
    <Link href="" onClick={() => history.goBack()}>
      <BsArrowLeft style={{ fontSize: "1.5em" }}></BsArrowLeft>
      <span>Back</span>
    </Link>
  );
};

export default BackLink;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin: 20px 0 60px;
  padding: 8px 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.focusBorder};
  }

  span {
    margin: 0 5px;
  }
`;
