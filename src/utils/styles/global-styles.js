import { createGlobalStyle, css } from "styled-components/macro";
import { normalize } from "polished";

import ds from "../../utils/styles/design-system";

import muliFontPath from "../../media/fonts/muli-webfont.woff2";
import muliBoldFontPath from "../../media/fonts/muli-bold-webfont.woff2";

const fontFamily = [
  {
    name: "muli-webfont",
    style: "normal",
    weight: "regular",
    type: "woff2",
    path: muliFontPath,
  },
  {
    name: "muli-bold-webfont",
    style: "bold",
    weight: "bold",
    type: "woff2",
    path: muliBoldFontPath,
  },
];

const fontFaceGenerator = css`
  ${fontFamily.map(
    (font) =>
      `
      @font-face {
        font-family: 'muli';
        font-style: ${font.style};
        font-weight: ${font.weight};
        src: url(${font.path});
        src: local('muli'),
            url(${font.path}) format(${font.type});
      }
      `
  )}
`;

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${fontFaceGenerator}

  :root {
    --color-intent-bg: ${ds.brand("white")};
    --color-intent-text: ${ds.brand("red")};
    --color-cta: ${ds.brand("red")};
    --color-background: ${ds.brand("grey")};
    --color-danger: ${ds.brand("red")};
    --color-success: ${ds.brand("green")};
    --color-disabled: ${ds.brand("grey")};
    --color-info: ${ds.brand("grey")};
    --color-text: ${ds.brand("black")};
    --color-primary: ${ds.brand("red")};
    --color-secondary: ${ds.brand("green")};
    --color-neutral: ${ds.brand("white")};
    --color-mute: ${ds.brand("black2")};
  }
  
  html {
    height: 100%;
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body, #root {
    min-height: 100%;
    height: 100%;
  }

  html,
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background: var(--color-background);
    color: var(--color-text);
    font-family: muli;
    font-family: ${ds.get("type.fontFamilyBase")};
  }

  * {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  figure, img, h1, h2, h3, h4, h5, h6, p, li, ul {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: ${ds.fs("m")};
  }

  h2 {
    font-size: ${ds.fs("m")};
  }

  h3 {
    font-size: ${ds.fs("xs")};
  }

  p {
    font-size: ${ds.fs("base")};
  }
  
  button {
    font-size: ${ds.fs("s")};
  }
`;

export default GlobalStyles;
