import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#fcffdd",
      100: "#f5fcb1",
      200: "#effa82",
      300: "#e8f752",
      400: "#e2f523",
      500: "#c8dc0a",
      600: "#9cab02",
      700: "#6f7a00",
      800: "#424900",
      900: "#161900",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
