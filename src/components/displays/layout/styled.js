import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto;
  // TODO: Get px value
  grid-template-rows: 60pt auto;
`;

export const HeaderSection = styled.section`
  display: flex;
  width: 100%;
`;

export const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FooterSection = styled.section`
  display: flex;
  width: 100%;
`;
