import { Box, Flex, Text, Circle } from "@chakra-ui/layout";
import React from "react";
/* import SettingsIcon from "./Settings";
 */ import { Image } from "@chakra-ui/image";
import { SettingsIcon } from "@chakra-ui/icons";

export default function MainContainer({ children }) {
  return (
    <Box w="100vw" h="100vh" bg="#13111C">
      <Box
        h="22vh"
        borderBottomWidth="1px"
        borderStyle="solid"
        borderColor="brand.border"
        px={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Flex h="36px" w="100%" justify="space-between" align="center">
          <Image
            boxSize="28px"
            objectFit="cover"
            src="https://avatars.githubusercontent.com/u/56870068?v=4"
            alt="Profile pic"
            borderRadius="full"
          />
          <SettingsIcon color="#878593" boxSize="20px" />
        </Flex>
        <Text
          userSelect="none"
          color="#ffffff"
          fontWeight={700}
          fontSize="28px"
        >
          Deployments
        </Text>
      </Box>
      <Box h="78vh" overflow="scroll">
        {children}
      </Box>
    </Box>
  );
}
