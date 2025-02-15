import {
  Box,
  Divider,
  Img,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <ChakraBaseProvider>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={{ md: 4, base: 2 }}
          bg={"gray.800"}
          color={"white"}
          position={"fixed"}
          w={"100%"}
          zIndex={999}
        >
          <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
            <Img
              ml={{ base: "0", md: "20" }}
              src={logo}
              alt="logo"
              w={{ base: 7, md: 14 }}
            />
            <Text
              ml={{ base: "1", md: "2" }}
              fontSize={{ md: "4xl", base: "xl" }}
              fontWeight={600}
            >
              DisCode
            </Text>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={{ md: 4, base: 0 }}
            gap={{ md: 8, base: 2 }}
            mr={{ md: 20, base: 1 }}
          >
            <NavLink to="/">
              <Text fontSize={{ base: "12px", md: "lg" }}>Home</Text>
            </NavLink>
            <Menu bg={"gray.50"}>
              <MenuButton icon={<FaChevronDown />}>
                <Text fontSize={{ base: "12px", md: "lg" }}>Donations</Text>
              </MenuButton>
              <MenuList p={3} bg={"white"}>
                <NavLink to="/TrustFunds">
                  <Text fontSize={{ base: "12px", md: "lg" }} color={"black"}>
                    Trust Funds
                  </Text>
                </NavLink>
                <Divider color={"black"} />
                <NavLink to="/donors">
                  <Text fontSize={{ base: "12px", md: "lg" }} color={"black"}>
                    Relief Inventory
                  </Text>
                </NavLink>
              </MenuList>
            </Menu>
            <Menu bg={"gray.50"}>
              <MenuButton icon={<FaChevronDown />}>
                <Text fontSize={{ base: "12px", md: "lg" }}>Patient</Text>
              </MenuButton>
              <MenuList p={3} bg={"white"}>
                <NavLink to="/PatientReg">
                  <Text fontSize={{ base: "12px", md: "lg" }} color={"black"}>
                    Patient Registration
                  </Text>
                </NavLink>
                <Divider color={"black"} />
                <NavLink to="/PatientDiag">
                  <Text fontSize={{ base: "12px", md: "lg" }} color={"black"}>
                    Patient Diagnosis
                  </Text>
                </NavLink>
              </MenuList>
            </Menu>
            <NavLink to="/camps">
              <Text fontSize={{ base: "12px", md: "lg" }}>Camps</Text>
            </NavLink>

            <Link to="/login">
              <Text fontSize={{ base: "12px", md: "lg" }}>Login</Text>
            </Link>
          </Box>
        </Box>
      </ChakraBaseProvider>
    </>
  );
}
