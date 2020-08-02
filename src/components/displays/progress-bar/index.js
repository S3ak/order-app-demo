import React from "react";
import PT from "prop-types";
import { Wrapper, BarFill } from "./styled";

import Skeleton from "./Skeleton";

const convertToScale = (val, maxVal) => val;

/**
 * The `ProgressBar` Component indicates to the user how long something will take.
 * This omponent relies of help methods to convert the input values to a percentage out of 100%
 * @author Monde Sineke <monde@gmail.com>
 */
export const ProgressBar = ({ isLoading, isError, currentVal, maxVal }) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const parsedCurrentVal = convertToScale(currentVal, maxVal);

  return (
    <Wrapper>
      <BarFill val={parsedCurrentVal} />
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  isLoading: PT.bool,
  isError: PT.bool,
  currentVal: PT.number,
  maxVal: PT.number,
};

ProgressBar.defaultProps = {
  isLoading: false,
  isError: false,
  currentVal: "0.6",
  maxVal: 100,
};

export default ProgressBar;
