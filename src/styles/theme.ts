// 1. Import the extendTheme function
import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = {
  colors: {
    brand: {
      300: "#14a5de",
      500: "#153e75",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Staatliches sans-serif",
  },
  styles: {
    global: {
      body: {},
      h1: {
        fontFamily: "Staatliches sans-serif",
        fontSize: "72px",
        fontWeight: "bold",
      },
      h2: {
        fontFamily: "Staatliches sans-serif",
        fontSize: "58px",
      },
      h3: {
        fontFamily: "Staatliches sans-serif",
        fontSize: "38px",
      },
      h4: {
        fontFamily: "Staatliches sans-serif",
        fontSize: "24px",
      },
    },
  },
};

export default extendTheme(theme);
