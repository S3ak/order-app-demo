import styled from "styled-components/macro";
import { prop } from "styled-tools";

import ds from "../../../utils/styles/design-system";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  border-radius: 4px;
  height: 8px;
  background: ${ds.brand("grey2")};
  box-shadow: inset 0 1px 0px rgba(0, 0, 0, 5%);
`;

export const BarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: scaleX(${prop("val", "1")});
  transform-origin: 0 0;
  height: 100%;
  border-radius: 4px;
  background: ${ds.brand("red")};
`;
