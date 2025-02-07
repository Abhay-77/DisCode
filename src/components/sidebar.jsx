import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

function sidebar({icon}) {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="space-between"
        p={4}
        bg={"gray.800"}
        color={"white"}
        position={"fixed"}
        h={"100%"}
        zIndex={999}
      >
        <Box
          mt={"40px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"start"}
          gap={"2rem"}
        >
          <NavLink to="/">
            <IoHomeOutline fontSize={"30px"} />
          </NavLink>
          {icon && (
            <NavLink to="/PatientReg">
              <FaPlus />
            </NavLink>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default sidebar;
