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
    color: "gray.700",
  },
  styles: {
    global: {
      body: {
        color: "gray.700",
      },
      h1: {
        color: "gray.700",
        fontFamily: "Staatliches",
        fontSize: "80px",
      },
    },
  },
};

export default extendTheme(theme);
