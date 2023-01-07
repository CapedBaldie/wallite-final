import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

const chakraTheme = extendTheme({
  colors: {
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2c3748",
      800: "#1a202c",
      900: "#171923",
    },
    dark: {
      50: "#eeeef6",
      100: "#cdcce5",
      200: "#acaad5",
      300: "#8b88c4",
      400: "#6a66b3",
      500: "#5955aa",
      600: "#514c99",
      700: "#3f3b77",
      800: "#2d2a55",
      900: "#1b1933",
    },
  },
  fonts: { heading: "Montserrat", body: "Montserrat" },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={chakraTheme}>
        <App />
      </ChakraProvider>
    </CacheProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
