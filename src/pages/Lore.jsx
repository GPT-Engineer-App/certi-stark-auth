import { Box, Heading, Text } from "@chakra-ui/react";

function Lore() {
  return (
    <Box>
      <header>
        <Heading as="h1">SecureLink Lore</Heading>
      </header>
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
