import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

function Lore() {
  return (
    <Box>
      <Navigation />
      <Box bgImage="url('https://cdn.leonardo.ai/users/4ee50c12-3520-462b-824b-f672be3497c7/generations/2db58849-0a04-49f6-b79e-cd50ee2aad1f/variations/Default_A_digital_operations_center_during_a_fictional_2024_cr_0_2db58849-0a04-49f6-b79e-cd50ee2aad1f_0.jpg')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={20}>
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
            Welcome to the Future of Digital Integrity
          </Heading>
          <Text fontSize="xl" textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)">
            SecureLink ensures the authenticity and integrity of your digital files using blockchain-based AI detection technology.
          </Text>
        </VStack>
      </Box>
      <main>
        <section>
          <Text>Welcome to the SecureLink lore page. Here you will find all the information about the history and background of SecureLink.</Text>
        </section>
      </main>
      <footer>
        <Text>&copy; 2024 SecureLink. All rights reserved.</Text>
      </footer>
    </Box>
  );
}

export default Lore;
