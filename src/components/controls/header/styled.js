import styled from "styled-components/macro";

import ds from "../../../utils/styles/design-system";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 6.39% 0 4.44%;
`;

export const TitleCol = styled.section`
  display: flex;
`;

export const TitleImg = styled.div`
  display: flex;
  width: 16px;

  img {
    object-fit: contain;
  }
`;

export const Title = styled.h1`
  display: flex;
  margin-left: 16px;
  font-size: ${ds.fs("base")};
`;
