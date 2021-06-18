import styled from "styled-components";
import Shimmer from "./Shimmer";

const SkeletonElement = ({ className, width, height, margin }) => {
  return ( 
    <Element className={className} width={width} height={height} margin={margin}>
      <Shimmer />
    </Element>
  )
};

const Element = styled.div`
  position: relative;
  overflow: hidden;
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin: ${({margin}) => margin};
  background-color: ${({ theme }) => theme.colors.skeletonBackground};
  border-radius: 4px;
`;

export default SkeletonElement;
