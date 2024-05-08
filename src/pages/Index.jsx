import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { FaCertificate } from "react-icons/fa";

const Index = () => {
  const [fileMetadata, setFileMetadata] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const toast = useToast();

  const handleSubmit = async () => {
    // Placeholder for blockchain interaction
    console.log("Submitting:", { fileMetadata, userInfo });
    toast({
      title: "Certificate Requested",
      description: "Your certificate request has been submitted.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    // Reset form
    setFileMetadata("");
    setUserInfo("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack
        spacing={4}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Text fontSize="2xl" mb={4}>
          <FaCertificate /> AuthentiCert
        </Text>
        <FormControl isRequired>
          <FormLabel htmlFor="fileMetadata">File Metadata</FormLabel>
          <Input id="fileMetadata" placeholder="Enter file metadata" value={fileMetadata} onChange={(e) => setFileMetadata(e.target.value)} />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel htmlFor="userInfo">User Information</FormLabel>
          <Input id="userInfo" placeholder="Enter user information" value={userInfo} onChange={(e) => setUserInfo(e.target.value)} />
        </FormControl>
        <Button mt={8} colorScheme="blue" type="submit">
          Create Certificate
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
