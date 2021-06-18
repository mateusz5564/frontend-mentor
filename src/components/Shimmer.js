import styled, { keyframes } from "styled-components";

const Shimmer = () => {
  return (
    <ShimmerWrapper>
      <StyledShimmer></StyledShimmer>
    </ShimmerWrapper>
  );
};

const animation = keyframes`
  0% {
    transform: translateX(-200%);
  }

  50% {
    transform: translateX(0%);
  } 

  100% {
    transform: translateX(200%);
  }
`;

const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation: ${animation} 2s linear infinite;
`;

const StyledShimmer = styled.div`
  background-color: ${({ theme }) => theme.colors.shimmer.background };
  box-shadow: 0 0 40px 30px ${({ theme }) => theme.colors.shimmer.shadow1 },  0 0 40px 30px ${({ theme }) => theme.colors.shimmer.shadow2 }, 0 0 40px 30px ${({ theme }) => theme.colors.shimmer.shadow3 };
  width: 5%;
  height: 100%;
`;

export default Shimmer;
