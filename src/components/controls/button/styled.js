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

const circleMixin = css`
  border: 3px solid currentColor;
  border-radius: 100%;
  width: 98px;
  height: 98px;
  background-color: currentColor;

  svg {
    color: var(--color-neutral);
    width: 29px;
    height: 20px;
  }
`;

const mutedStatusMixin = css`
  color: var(--color-mute);
  border-color: #424242;

  svg {
    color: #424242;
  }
`;

const successStatusMixin = css`
  color: var(--color-success);
  border-color: #12773c;

  ${ifProp(
    { kind: "circle" },
    css`
      box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    `
  )}
`;

const dangerStatusMixin = css`
  color: var(--color-danger);
  border-color: var(--color-danger);
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
      circle: circleMixin,
    },
    primaryMixin
  )};

  ${switchProp(prop("status"), {
    success: successStatusMixin,
    danger: dangerStatusMixin,
    muted: mutedStatusMixin,
  })};

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
