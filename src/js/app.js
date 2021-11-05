import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./lib/theme";
import MainContainer from "./components/MainContainer";
import List from "./components/List";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <MainContainer>
        <List />
      </MainContainer>
    </ChakraProvider>
  );
}
