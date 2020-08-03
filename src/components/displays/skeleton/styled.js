import styled, { keyframes, css } from "styled-components/macro";

import ds from "../../../utils/styles/design-system";

const shimmerAnime = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const skeletonMixin = css`
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: ${ds.brand("grey")};

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(${ds.brand("white")}, 0) 0,
      rgba(${ds.brand("white")}, 0.2) 20%,
      rgba(${ds.brand("white")}, 0.5) 60%,
      rgba(${ds.brand("white")}, 0)
    );
    animation: ${shimmerAnime} 2s infinite;
    content: "";
  }
`;

export const Box = styled.div`
  ${skeletonMixin}
  width: 100%;
  height: 100%;
`;

export const Circle = styled.div`
  ${skeletonMixin}
  width: 100%;
  border-radius: 100%;
`;
