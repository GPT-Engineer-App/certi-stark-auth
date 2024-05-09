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
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" background="linear-gradient(120deg, #9DCEFF, #92FE9D)">
      <VStack
        spacing={4}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        style={{ marginTop: "60px" }}
      >
        <Text fontSize="4xl" mb={4} style={{ alignSelf: "flex-start", marginLeft: "20px", color: "#2a69ac", fontFamily: "Georgia, serif" }}>
          Verify the authenticity of your files with blockchain-based AI detection technology
        </Text>
        <Text fontSize="3xl" style={{ alignSelf: "flex-start", marginLeft: "20px", marginTop: "20px" }}>
          SecureLink
        </Text>
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
        <Button mt={8} colorScheme="green" type="submit">
          Verify Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
