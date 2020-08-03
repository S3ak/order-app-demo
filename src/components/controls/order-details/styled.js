import styled, { css } from "styled-components/macro";

import ds from "../../../utils/styles/design-system";

const unstyleListMixin = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 19px 15px;
  background: ${ds.brand("white")};
  border-radius: 5px;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const HeadingIcon = styled.h3`
  margin-right: 12px;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
  background: ${ds.brand("green")};
  border-radius: 3px;
  color: ${ds.brand("white")};
`;

export const Body = styled.div`
  width: 100%;
  padding-top: 23px;
`;

export const InstructionsSection = styled.div`
  width: 100%;
`;

export const InstructionsTitle = styled.h3`
  width: 100%;
  color: ${ds.brand("darkGrey")};
`;

export const InstructionsDescription = styled.p`
  width: 100%;
  padding-top: 4px;
`;

export const List = styled.li`
  ${unstyleListMixin};
  width: 100%;
  padding-top: 24px;
`;
