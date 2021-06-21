import styled from "styled-components";
import SkeletonElement from "./SkeletonElement";

const SkeletonCountryCard = () => {
  return (
    <CardWrapper>
      <SkeletonImg />

      <InfoWrapper>
        <SkeletonElement width="100px" height="2em" margin="0 0 20px" />
        <SkeletonInfo />
        <SkeletonInfo />
        <SkeletonInfo />
      </InfoWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.skeletonCardBackground};
  border-radius: 10px;
  margin-bottom: 3em;
`;

const InfoWrapper = styled.div`
  padding: 20px;
`;

const SkeletonImg = styled(SkeletonElement).attrs(props => ({
  width: "100%",
  height: "200px",
}))`
  @media (min-width: 600px) {
    width: 50%;
  }
`;

const SkeletonInfo = styled(SkeletonElement).attrs(props => ({
  margin: "10px 0",
  width: "50%",
  height: "1.5em",
}))``;

export default SkeletonCountryCard;
