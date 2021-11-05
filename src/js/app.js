import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./lib/theme";
import MainContainer from "./components/MainContainer";
import List from "./components/List";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      {/*  MainContainer has all the fixed position
      UI elements like navbar and page title, List contains the page content  */}
      <MainContainer>
        <List />
      </MainContainer>
    </ChakraProvider>
  );
}
