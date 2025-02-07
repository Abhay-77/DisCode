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
        p={4}
        bg={"gray.800"}
        color={"white"}
        position={"fixed"}
        w={"100%"}
        zIndex={999}
      >
        <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
          <Img ml={20} src={logo} alt="logo" w={14} />
          <Text ml={2} fontSize="4xl" fontWeight={600}>
            DisCode
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={4}
          gap={8}
          mr={20}
        >
          <NavLink to="/">
            <Text fontSize="lg">Home</Text>
          </NavLink>
          <Menu bg={"gray.50"}>
            <MenuButton icon={<FaChevronDown />}>
              <Text fontSize="lg">Donations</Text>
            </MenuButton>
            <MenuList p={3} bg={"white"}>
              <NavLink to="/TrustFunds">
                <Text fontSize="lg" color={"black"}>
                  Trust Funds
                </Text>
              </NavLink>
              <Divider color={"black"} />
              <NavLink to="/donors">
                <Text fontSize="lg" color={"black"}>
                  Relief Inventory
                </Text>
              </NavLink>
            </MenuList>
          </Menu>
          <Menu bg={"gray.50"}>
            <MenuButton icon={<FaChevronDown />}>
              <Text fontSize="lg">Patient</Text>
            </MenuButton>
            <MenuList p={3} bg={"white"}>
              <NavLink to="/PatientReg">
                <Text fontSize="lg" color={"black"}>
                  Patient Registration
                </Text>
              </NavLink>
              <Divider color={"black"} />
              <NavLink to="/PatientDiag">
                <Text fontSize="lg" color={"black"}>
                  Patient Diagnosis
                </Text>
              </NavLink>
            </MenuList>
          </Menu>
          <NavLink to="/camps">
            <Text fontSize="lg">Camps</Text>
          </NavLink>

          <Text fontSize="lg">
            <Link to="/login">Login</Link>
          </Text>
        </Box>
        </Box>
      </ChakraBaseProvider>
      </>
      
  );
}
