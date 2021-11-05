import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Get() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log("data fetched", data);
    });
}

export function MyComp() {
  return (
    <Stack spacing={4} p={8} borderRadius="lg">
      <Heading as="h1" size="md" color="white">
        Chakra UI is cool!
      </Heading>
      <Text as="p" fontSize="md" color="primary.500">
        Here are your first Chakra components:
      </Text>
      <Button
        bg="brand.accent"
        color="white"
        _hover={{ backgroundColor: "#ba8aea" }}
        isFullWidth
        onClick={() => Get()}
      >
        Click me, please!
      </Button>
    </Stack>
  );
}
