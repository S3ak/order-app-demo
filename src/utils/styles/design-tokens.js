import basePalette from "./baseColourPalette";

const fontFamily = {
  system:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  mono: 'Menlo, Monaco, "Courier New", monospace',
};

const transitions = {
  duration: "300ms",
  timing: "cubic-bezier(0.77, 0, 0.175, 1)",
};

const colorPalette = basePalette;

export const designTokens = {
  type: {
    baseFontSize: "14px",

    sizes: {
      xs: "16px",
      s: "20px",
      base: "30px",
      m: "36px",
      l: "42px",
      xl: "50px",
      xxl: "58px",
    },

    fontFamily,
    fontFamilyBase: fontFamily.system,
    fontFamilyHeadings: fontFamily.mono,

    lineHeight: {
      headings: 1.1,
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: "bold", // Useful to set here when bold webfonts come as 400 font-weight.
      headings: "bold", // instead of browser default, bold
    },
  },

  colors: {
    colorPalette,

    brand: {
      red: "#EA433D",
      green: "#00C853",
      black: "#000000",
      grey: "#E8E8E8",
      darkGrey: "#8E8F90",
      white: "#FFF",
    },
  },

  breakpoints: {
    /* NOTE: Should be 320 hich is Iphone SE */
    s: 344,
    m: 768,
    l: 992,
    xl: 1200,
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
    _foreground: 9999,
    _background: -1,
  },

  spacing: {
    baseline: 20,
    padding: "0.3em",
    scale: [0, 8, 16, 24, 32, 40],
  },

  layout: {
    /* 16px/ 4.44% */
    gutter: "4.44%",
    paddingColumn: "16pt",
    /* 16px/ 2.3% */
    paddingRow: "2.3%",
    maxWidth: "1200px",
    grid: {
      columnCount: 12,
    },
  },

  transition: {
    default: {
      duration: transitions.duration,
      timing: transitions.timing,
      transition: `all ${transitions.duration} ${transitions.timing}`,
    },
  },

  borderRadius: "0.3em",
};

export default designTokens;
