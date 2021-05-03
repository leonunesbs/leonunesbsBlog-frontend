// 1. Import the extendTheme function
import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeBlue: ThemeOverride = {
  colors: {
    brand: {
      300: "#14a5de",
      500: "#153e75",
    },
    gray: {
      50: "#F7FAFC",
      800: "#1A202C",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Staatliches, sans-serif",
    body: "JetBrains Mono, monospace",
  },
  styles: {
    global: {
      body: {},
    },
  },
};

export default extendTheme(themeBlue);
