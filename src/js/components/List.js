import React, { useEffect, useState } from "react";
import { Flex, Text, Circle } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";

/*  project, environment, time, branch, message    */
function DeployCell({ project, env, time, branch, message, author, status }) {
  return (
    <Flex
      direction="column"
      my={2}
      w="100%"
      borderRadius={8}
      px={4}
      py={2}
      borderWidth="2px"
      borderColor="#211f2d"
      borderStyle="solid"
      bg="#211f2d"
      _hover={{ borderColor: "brand.border" }}
    >
      <Flex justify="space-between" w="100%">
        <Flex align="center">
          <Flex
            bg="#b62d2b"
            borderRadius="full"
            h="12px"
            w="12px"
            mr={4}
          ></Flex>
          <Flex direction="column">
            <Flex>
              <Text mr={1} color="brand.secondary">
                Failed
              </Text>
              <Text color="brand.secondary">{time}</Text>
            </Flex>
            <Text color="white">{project}</Text>
            <Text color="brand.secondary">{env}</Text>
          </Flex>
        </Flex>

        <Flex direction="column" align="flex-end">
          <Text color="brand.secondary">{branch}</Text>
          <Text color="white">{message}</Text>
          <Text color="brand.secondary">{author}</Text>
        </Flex>
      </Flex>
      {/* Buttons */}
      <Flex w="100%" mt={2} pt={1} pb={1} pl={8} justify="space-between">
        <Button
          size="sm"
          background="#433f5a"
          color="#fff"
          _hover={{ color: "#fff", backgroundColor: "brand.accent" }}
        >
          View Logs
        </Button>
        <Button
          size="sm"
          background="#433f5a"
          color="#fff"
          _hover={{ color: "#fff", backgroundColor: "brand.accent" }}
        >
          View Commit
        </Button>
      </Flex>
    </Flex>
  );
}

export default function List() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  };

  return (
    <Flex direction="column" w="100vw" px={4} mb={8} pt={4}>
      <Flex w="100%" justify="space-between" mb={2}>
        <Button
          color="white"
          bg={"brand.bg"}
          borderColor={"brand.border"}
          borderWidth="1px"
          maxW="100px"
          minH="42px"
          borderRadius={6}
          _hover={{ backgroundColor: "#211f2d" }}
          rightIcon={<ChevronDownIcon />}
        >
          <Text>Recent</Text>
        </Button>

        <Button
          color="white"
          bg={"brand.bg"}
          borderColor={"brand.border"}
          borderWidth="1px"
          maxW="100px"
          minH="42px"
          borderRadius={6}
          _hover={{ backgroundColor: "#211f2d" }}
          leftIcon={<Circle bg="#b62d2b" size="12px" />}
        >
          <Text>Failed</Text>
        </Button>
      </Flex>

      <DeployCell
        project="timetable"
        env="production"
        time="4 mins ago"
        branch="main"
        author="Rodrigo Weilg"
        message="establishing db conn"
      />
      <DeployCell
        project="timetable"
        env="production"
        time="37 mins ago"
        branch="main"
        author="Rodrigo Weilg"
        message="structs json marshaling"
      />
      <DeployCell
        project="timetable"
        env="production"
        time="4 mins ago"
        branch="main"
        author="Rodrigo Weilg"
        message="establishing test pg conn"
      />
    </Flex>
    /*       {list.length > 0 && (
        <Flex direction="column" px={4}>
          <DeployCell />
          {list &&
            list.map((user) => (
              <Cell name={user.name} email={user.email} pageProps={{ mb: 4 }} />
            ))}
        </Flex>
      )} */
  );
}
