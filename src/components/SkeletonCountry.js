import SkeletonElement from "./SkeletonElement";
import styled from "styled-components";

const SkeletonCountry = () => {
  return (
    <>
      <SkeletonImg />
      <SkeletonElement margin="30px 0 20px" width="40%" height="2.5em" />
      <SkeletonInfo />
      <SkeletonInfo />
      <SkeletonInfo />
      <SkeletonInfo />
      <SkeletonInfo />

      <div style={{ marginBottom: "40px" }} />

      <SkeletonInfo />
      <SkeletonInfo />
      <SkeletonInfo />
      <SkeletonElement margin="40px 0 10px" width="40%" height="2em" />
      <SkeletonTile />
      <SkeletonTile />
      <SkeletonTile />
    </>
  );
};

const SkeletonImg = styled(SkeletonElement).attrs(props => ({
  margin: "0 0 20px",
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

const SkeletonTile = styled(SkeletonElement).attrs(props => ({
  margin: "7px 0 0",
  width: "120px",
  height: "30px",
}))`
  display: inline-block;
  margin-right: 7px;
`;

export default SkeletonCountry;
