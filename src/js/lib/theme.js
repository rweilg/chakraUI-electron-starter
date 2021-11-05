import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    yours: {
      cardBG: "#f2f2f2",
      accent: "#1953ff",
    },
  },
  styles: {
    body: {
      bg: "#13111C",
    },
  },
});

export default customTheme;
