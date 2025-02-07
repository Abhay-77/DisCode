import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Camps from "./components/Camps.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Donate from "./components/Donate.jsx";
import TrustFunds from "./components/TrustFunds.jsx";
import TransacHis from "./components/TransacHis.jsx";
import ReliefInv from "./ReliefInv.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<ReliefInv />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="/TrustFunds" element={<TrustFunds />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/transactionHistory" element={<TransacHis />} />
      </Routes>
    </BrowserRouter>
);
