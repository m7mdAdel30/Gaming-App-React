import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  // ,
  // colors: {
  // gray:
  // {
  //   50: '#e5f1fb',
  //   100: '#ced7e3',
  //   200: '#b3bfcb',
  //   300: '#96a7b5',
  //   400: '#798e9f',
  //   500: '#607786',
  //   600: '#4a5d69',
  //   700: '#34424c',
  //   800: '#1c2630',
  //   900: '#030a17',
  // },
  //   }
});

export default theme;
