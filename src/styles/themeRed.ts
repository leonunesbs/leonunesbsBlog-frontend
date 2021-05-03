// 1. Import the extendTheme function
import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeRed: ThemeOverride = {
  colors: {
    brand: {
      300: "#de1414",
      500: "#751515",
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

export default extendTheme(themeRed);
