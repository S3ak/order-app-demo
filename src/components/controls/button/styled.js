import styled, { css } from "styled-components/macro";
import { switchProp, prop, ifProp } from "styled-tools";

import ds from "../../../utils/styles/design-system";

const textMixin = css`
  background: transparent;
`;

const primaryMixin = css`
  background: var(--color-cta);
  color: var(--color-neutral);
`;

const secondaryMixin = css`
  color: var(--color-cta);
  border: 1px solid currentColor;
`;

export const Wrapper = styled.button`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${ds.space(1)};
  color: var(--color-cta);
  background: transparent;
  border-radius: 29px;
  border: 0 solid transparent;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;

  ${switchProp(
    prop("kind"),
    {
      text: textMixin,
      primary: primaryMixin,
      secondary: secondaryMixin,
    },
    primaryMixin
  )};

  ${ifProp(
    "isFullWidth",
    css`
      width: 100%;
    `
  )}

  &:hover {
    cursor: pointer;
  }

  & + & {
    margin-left: 8px;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 1px;
  display: inline-flex;
  align-items: flex-end;
  width: 17px;
`;
