import React from "react";
import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4} bg="gray.100">
      <Button as={Link} to="/" colorScheme="blue">
        Home
      </Button>
      <Button as={Link} to="/about" colorScheme="blue">
        About
      </Button>
    </HStack>
  );
};

export default Navigation;
