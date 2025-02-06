import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

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
        <Box>
          <Text ml={20} fontSize="4xl" fontWeight={600}>
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
          <Text fontSize="lg">
            <Link>Home</Link>
          </Text>
          <Text fontSize="lg">
            <Link>Donations</Link>
          </Text>
          <Text fontSize="lg">
            <Link>Camps</Link>
          </Text>
          <Text fontSize="lg">
            <Link>Committee</Link>
          </Text>
          <Text fontSize="lg">
            <Link to='/login'>Login</Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
