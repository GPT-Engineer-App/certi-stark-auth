import React from "react";
import { Container, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent>
      <Text fontSize="3xl" mt={4}>
        About Us
      </Text>
      <Text mt={2}>This is the About page. Here you can add information about your application.</Text>
    </Container>
  );
};

export default About;
