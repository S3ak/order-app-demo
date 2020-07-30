import React from "react";
import PT from "prop-types";
import { Wrapper, TitleCol, TitleImg, Title } from "./styled";

import Skeleton from "./Skeleton";
import shopIcon from "../../../media/shop.png";

export const Header = ({
  isLoading,
  isError,
  title,
  titleImgUrl,
  titleImgAlt,
  ctaText,
  onCTACB,
}) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper>
      <TitleCol>
        <TitleImg>
          <img src={titleImgUrl} alt={titleImgAlt} />
        </TitleImg>

        <Title>{title}</Title>
      </TitleCol>{" "}
      <button onClick={onCTACB}>{ctaText}</button>
    </Wrapper>
  );
};

Header.propTypes = {
  isLoading: PT.bool,
  isError: PT.bool,
  title: PT.node,
  titleImgUrl: PT.string,
  titleImgAlt: PT.string,
  ctaText: PT.string,
  onCTACB: PT.func,
};

Header.defaultProps = {
  isLoading: false,
  isError: false,
  title: "Collect order",
  titleImgUrl: shopIcon,
  titleImgAlt: "Icon of a shop",
  ctaText: "Help",
  onCTACB: () => console.warn("USer click the CTA"),
};

export default Header;
