import styled from "styled-components/macro";

import ds from "../../../utils/styles/design-system";

export const Wrapper = styled.section`
  width: 100%;
  padding: 17px 5% 11px 4.44%;
  border-radius: 5px;
  border: 1px solid ${ds.brand("grey")};
  background: ${ds.brand("white")};
`;
