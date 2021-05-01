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
    heading: "Staatliches",
  },
  styles: {
    global: {
      body: {},
      h1: {
        fontFamily: "Staatliches",
        fontSize: "52px",
        fontWeight: "bold",
      },
      h2: {
        fontFamily: "Staatliches",
        fontSize: "32px",
      },
      h3: {
        fontFamily: "Staatliches",
        fontSize: "20px",
      },
    },
  },
};

export default extendTheme(theme);
