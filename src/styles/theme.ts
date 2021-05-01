// 1. Import the extendTheme function
import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  config: {},
  fonts: {
    heading: "Staatliches",
  },
  styles: {
    global: {
      body: {},
      h1: {
        fontFamily: "Staatliches",
        fontSize: "80px",
      },
    },
  },
};

export default extendTheme(theme);
