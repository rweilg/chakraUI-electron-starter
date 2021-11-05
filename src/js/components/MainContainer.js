import { Box, Flex, Text, Circle } from "@chakra-ui/layout";
import React from "react";
import { Image } from "@chakra-ui/image";
import { SettingsIcon } from "@chakra-ui/icons";

export default function MainContainer({ children }) {
  return (
    <Box w="100vw" h="100vh" bg="white">
      <Box
        h="22vh"
        borderBottomWidth="1px"
        borderStyle="solid"
        borderColor="gray.200"
        px={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {/* Fixed Nav and title */}
        <Flex h="36px" w="100%" justify="space-between" align="center">
          <Image
            boxSize="24px"
            objectFit="cover"
            src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg"
            alt="Profile pic"
            borderRadius="full"
          />
          <SettingsIcon color="#878593" boxSize="22px" />
        </Flex>
        <Text userSelect="none" color="black" fontWeight={700} fontSize="28px">
          Title
        </Text>
      </Box>

      {/*  Page content  */}
      <Box h="78vh" overflow="scroll">
        {children}
      </Box>
    </Box>
  );
}
