import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export default function Cell({ name, email, username, city }) {
  return (
    <Flex
      direction="column"
      my={2}
      w="100%"
      borderRadius={8}
      px={4}
      py={2}
      bg="yours.cardBG"
    >
      <Flex justify="space-between" w="100%">
        <Flex direction="column">
          <Text mr={1} color="gray.500">
            {email}
          </Text>

          <Text color="black" fontSize={"18px"} fontWeight={600}>
            {name}
          </Text>

          <Text mr={1} color="gray.500">
            {username}
          </Text>
        </Flex>

        <Flex direction="column" align="flex-end">
          <Text color="gray.500">{city}</Text>
        </Flex>
      </Flex>
      {/* Buttons */}
      <Flex w="100%" mt={2} pt={1} pb={1} justify="flex-end">
        <Button
          size="sm"
          bg="white"
          flexBasis={"initial"}
          flexShrink={"initial"}
          flexGrow={1}
        >
          Button
        </Button>
        <Button
          size="sm"
          background="gray.800"
          color="#fff"
          _hover={{ color: "#fff", backgroundColor: "yours.accent" }}
          ml={2}
        >
          Custom Button
        </Button>
      </Flex>
    </Flex>
  );
}
