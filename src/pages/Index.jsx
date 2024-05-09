import React, { useState, useRef } from "react";
import { Container, VStack, Input, Button, Text, FormControl, FormLabel, useToast, Image, Tooltip } from "@chakra-ui/react";
import { FaCertificate, FaInfoCircle } from "react-icons/fa";

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
        <Image src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6ce6cd5c-5aa9-4259-ad63-9952fab60c86%2Fbed4c0ac-1514-4ec7-85c3-4e39cea0a1f4%2F7EA8CD8C-960E-4E8A-BAC5-6381D58FEDF9.jpg?table=block&id=17ddf423-5204-42fc-b471-9a3e77f0d354&spaceId=6ce6cd5c-5aa9-4259-ad63-9952fab60c86&width=2000&userId=d7e46b51-22d5-412d-a9a9-a537d935c94a&cache=v2" boxSize="50px" alt="AuthentiCert Logo" mb={8} />
        <Text fontSize="3xl" mb={4}>
          Securely verify and certify your files with blockchain technology
        </Text>
        <Text fontSize="2xl">AuthentiCert</Text>
        <FormControl>
          <FormLabel htmlFor="file">Drag & Drop or Browse Files</FormLabel>
          <Text fontSize="sm" color="gray.600" as="span" mr={2}>
            Supported Formats
          </Text>
          <Tooltip label="Documents: .pdf, .doc, .docx, .odt, .rtf, Images: .jpg, .jpeg, .png, .gif, .bmp, .tiff, .svg, Audio: .mp3, .wav, .aac, .ogg, .m4a, Video: .mp4, .mov, .wmv, .avi, .mpeg, Archives: .zip, .rar, .7z, .tar.gz">
            <span>
              <FaInfoCircle />
            </span>
          </Tooltip>
          <Input id="file" type="file" ref={fileInputRef} multiple />
          <Text fontSize="sm" mt={2} color="gray.500">
            Files will be processed to verify authenticity. You will receive a digital certificate upon successful verification.
          </Text>
        </FormControl>
        <Button mt={8} colorScheme="vibrant" type="submit">
          Certify
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
