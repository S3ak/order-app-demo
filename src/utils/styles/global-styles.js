import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import ds from "../../utils/styles/design-system";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  
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
  }  

  html {
    height: 100%;
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    max-height: 100%;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: var(--color-intent-bg);
    font-family: ${ds.get("fontFamilyBase")};
      box-sizing: border-box;
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

  figure, img, h1, h2, h3, h4, h5, h6, li, ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
