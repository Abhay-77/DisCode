import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Camps from "./components/Camps.jsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/camps" element={<Camps />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
