import styled from "styled-components/macro";

import ds from "../../../utils/styles/design-system";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Heading = styled.h2`
  width: 100%;
  flex: 1 1 auto;
  font-weight: bold;
`;

export const Body = styled.p`
  width: 100%;
  flex: 1 1 auto;
  padding-top: 4px;
  color: ${ds.brand("darkGrey")};
  font-size: ${ds.fs("xxs")};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Indicator = styled.div`
  width: 100%;
  flex: 1 1 auto;
  padding-top: 16px;
`;
