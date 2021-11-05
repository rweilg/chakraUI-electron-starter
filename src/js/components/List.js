import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/layout";
import Cell from "./Cell";

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
      <Flex direction="column" px={4}>
        {list &&
          list.map((user) => (
            <Cell
              name={user.name}
              email={user.email}
              city={user.address.city}
              username={user.username}
            />
          ))}
      </Flex>
    </Flex>
  );
}
