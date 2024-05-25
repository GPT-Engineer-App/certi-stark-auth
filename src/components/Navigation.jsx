import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <HStack spacing={4} position="absolute" top="20px" left="20px">
      <Button colorScheme="teal" onClick={() => navigate("/lore")}>
        Explore Our Story
      </Button>
      <Button colorScheme="teal" onClick={() => navigate("/")}>
        Return to App
      </Button>
    </HStack>
  );
};

export default Navigation;
