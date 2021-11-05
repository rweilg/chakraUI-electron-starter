import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import railwayish from "./lib/theme";
import { MyComp } from "./components/comp";
import MainContainer from "./components/MainContainer";
import List from "./components/List";

export default function App() {
  return (
    <ChakraProvider theme={railwayish}>
      <MainContainer>
        <List />
      </MainContainer>
    </ChakraProvider>
  );
}
