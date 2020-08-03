import styled, { css } from "styled-components/macro";
import { ifProp } from "styled-tools";
import { rgba } from "polished";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  width: 198px;
  height: 198px;
`;

export const OuterCircle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${rgba("#494949", 0.4)};
  border-radius: 100%;
  color: #fff;
`;

export const InnerCircle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 9px;

  ${ifProp(
    "hasOffset",
    css`
      padding-bottom: 0;
    `
  )};
`;

export const ProgressCircle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.div`
  width: 100%;
  font-size: 38px;
  font-weight: bolder;
`;

export const Description = styled.div`
  width: 100%;
  font-size: 13px;
`;

export const Figure = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 21px;

  .ring {
    box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.47);
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 46px;
  height: 34px;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
