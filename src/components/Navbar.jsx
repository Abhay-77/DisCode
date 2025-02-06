import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
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
          <Img ml={20} src={logo} alt="logo" w={14}  />
          <Text  ml={2} fontSize="4xl" fontWeight={600}>
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
          <Text fontSize="lg">Home</Text>
          <Text fontSize="lg">Donations</Text>
          <Text fontSize="lg">Camps</Text>
          <Text fontSize="lg">Committee</Text>
          <Text fontSize="lg">Login</Text>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
