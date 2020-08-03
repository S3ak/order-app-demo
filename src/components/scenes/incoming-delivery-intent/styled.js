import styled from "styled-components/macro";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #1e2021;
  justify-content: space-between;
`;

export const HeadingSection = styled.section`
  flex: 1 1 auto;
  padding-top: 61px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bolder;
  color: #fff;
`;

export const DescriptionSection = styled.section`
  flex: 1 1 auto;
  display: flex;
  padding-top: 52px;
  justify-content: center;
`;

export const FooterSection = styled.section`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 33px;
`;

export const ButtonGroup = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  max-width: 360px;
  justify-content: space-between;
  padding: 0 62px;
`;

export const ControlDescription = styled.p`
  text-align: center;
  margin-top: 18px;
  color: #fff;
`;

export const RoundButton = styled.button``;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 14px;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Legend = styled.p`
  color: #fff;
  margin-top: 15px;
`;
