import React, { useState, useRef } from "react";
import { Container, VStack, Input, Button, Text, FormControl, FormLabel, useToast, Image } from "@chakra-ui/react";
import { FaCertificate } from "react-icons/fa";

const Index = () => {
  const fileInputRef = useRef(null);
  const toast = useToast();

  const handleSubmit = async () => {
    // Placeholder for blockchain interaction
    const files = fileInputRef.current.files;
    console.log("Submitting files:", files);
    toast({
      title: "Files Submitted",
      description: "Your files have been submitted and are being processed. You will receive your certificate shortly.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    // Reset form
    fileInputRef.current.value = "";
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
        <FormControl>
          <FormLabel htmlFor="file">Upload File (You can either browse your files or drag and drop them here)</FormLabel>
          <Text fontSize="sm" color="gray.600">
            Accepted file types: .pdf, .docx, .jpg, .png, .mp3
          </Text>
          <Input id="file" type="file" ref={fileInputRef} multiple />
          <Text fontSize="sm" mt={2} color="gray.500">
            Files will be processed to verify authenticity. You will receive a digital certificate upon successful verification.
          </Text>
        </FormControl>
        <Button mt={8} colorScheme="blue" type="submit">
          Create Certificate
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
