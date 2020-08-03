import styled from "styled-components/macro";

import { Wrapper as Button } from "../button/styled";

import ds from "../../../utils/styles/design-system";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const HeadingSection = styled.section`
  width: 100%;
`;

export const Title = styled.h2`
  width: 100%;
`;

export const Description = styled.p`
  margin-top: 8px;
  width: 100%;
  color: ${ds.brand("grey")};
`;

export const ControlSection = styled.section`
  width: 100%;
  display: flex;
  padding-top: 16px;

  ${Button} {
    flex: 1 1 50%;
  }
`;
