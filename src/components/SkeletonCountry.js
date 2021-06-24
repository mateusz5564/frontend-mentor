import SkeletonElement from "./SkeletonElement";
import styled from "styled-components";

import { DataWrapper, TextWrapper, TextCol1, TextCol2 } from "../components/Country";

const SkeletonCountry = () => {
  return (
    <>
      <DataWrapper>
        <SkeletonImg />
        <TextWrapper>
          <SkeletonH2 />
          <TextCol1>
            <SkeletonInfo />
            <SkeletonInfo />
            <SkeletonInfo />
            <SkeletonInfo />
            <SkeletonInfo />
          </TextCol1>

          <TextCol2>
            <SkeletonInfo />
            <SkeletonInfo />
            <SkeletonInfo />
          </TextCol2>
          <SkeletonH3 />
          <div>
            <SkeletonTile />
            <SkeletonTile />
            <SkeletonTile />
          </div>
        </TextWrapper>
      </DataWrapper>
    </>
  );
};

const SkeletonImg = styled(SkeletonElement).attrs(props => ({
  margin: "0 0 20px",
  width: "100%",
}))`
  min-height: 200px;
  aspect-ratio: 3 / 2;

  @media (min-width: 600px) {
    flex-basis: 100%;
  }

  @media (min-width: 900px) {
    flex-basis: 50%;
    flex-shrink: 0;
    margin-right: 50px;
  }

  @media (min-width: 1200px) {
    margin-right: 100px;
  }
`;

const SkeletonH2 = styled(SkeletonElement).attrs(props => ({
  margin: "30px 0 20px",
  width: "130px",
  height: "2.5em",
}))`
  flex-basis: 100%;
`;

const SkeletonInfo = styled(SkeletonElement).attrs(props => ({
  margin: "10px 0",
  width: "200px",
  height: "1.5em",
}))``;

const SkeletonH3 = styled(SkeletonElement).attrs(props => ({
  margin: "10px 0 10px",
  width: "130px",
  height: "2.5em",
}))`
  flex-basis: 100%;
`;

const SkeletonTile = styled(SkeletonElement).attrs(props => ({
  margin: "7px 0 0",
  width: "120px",
  height: "30px",
}))`
  justify-self: flex-start;
  display: inline-block;
  margin-right: 7px;
`;

export default SkeletonCountry;
