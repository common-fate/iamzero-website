import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// https://chakra-ui.com/docs/features/color-mode#updating-the-theme-config

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primaryLight: "#619eff",
    primaryDark: "#4d83db",
    cfBlue: {
      50: "#dff0ff",
      100: "#b0d0ff",
      200: "#7fb1ff",
      300: "#4d91ff",
      400: "#1f72fe",
      500: "#0859e5",
      600: "#0045b3",
      700: "#003181",
      800: "#001e50",
      900: "#000a20",
    },
  },
  fonts: {
    heading: "Bitter, serif",
    subheading: "Rubik, sans-serif",
    body: "Rubik, sans-serif",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 200,
    normal: 300,
    medium: 300,
    semibold: 400,
    bold: 500,
    extrabold: 600,
    black: 700,
  },
  styles: {
    global: {
      body: {
        fontWeight: 300,
      },
      h1: {
        fontWeight: 500,
      },
    },
  },
});
export default theme;
