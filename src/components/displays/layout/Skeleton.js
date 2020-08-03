import React from "react";
import ContentLoader, { Code } from "react-content-loader";
import { Wrapper, HeaderSection, BodySection } from "./styled";

const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    <circle cx="30" cy="30" r="30" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

export const Skeleton = () => (
  <Wrapper>
    <HeaderSection>
      <MyLoader />
    </HeaderSection>

    <BodySection>
      <Code />
    </BodySection>
  </Wrapper>
);

export default Skeleton;
