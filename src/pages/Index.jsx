import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, FormControl, FormLabel, useToast, Image } from "@chakra-ui/react";
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
        <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-award'%3E%3Ccircle cx='12' cy='8' r='7'/%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'/%3E%3C/svg%3E" boxSize="50px" alt="AuthentiCert Logo" mb={4} />
        <Text fontSize="2xl">AuthentiCert</Text>
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
