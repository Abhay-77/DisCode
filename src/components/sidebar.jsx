import React from "react";
import { Box } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";


function sidebar() {
  return (
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
      <Box mt={"40px"}>
        <NavLink to="/">
          <IoHomeOutline fontSize={"30px"} />
        </NavLink>
      </Box>
    </Box>
  );
}

export default sidebar;
