import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    vibrant: {
      500: "#e53e3e",
      600: "#dd6b20",
      700: "#d69e2e",
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transform: "scale(1.05)",
          transition: "all 0.2s",
        },
        _active: {
          transform: "scale(0.95)",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
