import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      100: "#FF0000",
      200: "#A7ABFB",
      300: "#8388F9",
      400: "#6268F8",
      500: "#a667e4",
      600: "#262EF6",
      700: "#0B14F5",
      800: "#0911DD",
      900: "#080FC7",
    },
    yours: {
      cardBG: "#f2f2f2",
    },
    brand: {
      accent: "#1953ff",
      border: "#33323e",
      secondary: "#a1a0ab",
    },
  },
  styles: {
    body: {
      bg: "#13111C",
    },
  },
});

export default customTheme;
