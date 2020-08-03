import styled from "styled-components/macro";

import ds from "../../../../utils/styles/design-system";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-transform: capitalize;
  border-top: 2pt solid ${ds.brand("grey")};
  padding-bottom: 14px;
`;

export const Title = styled.h3`
  margin-top: 14px;
  width: 100%;
  font-size: ${ds.fs("base")};
`;

export const Description = styled.p`
  width: 100%;
  color: ${ds.brand("grey3")};
  font-size: ${ds.fs("xs")};
`;
