import React from "react";
import Sidebar from "./sidebar";
import { Box, Divider, Card, CardBody, Text, Button } from "@chakra-ui/react";
import { LiaDonateSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function TrustFunds() {
  return (
    <div>
      <ChakraProvider>
      <Sidebar />
      <Box ml={"64px"}>
        <Box
          ml={"70px"}
          p={3}
          fontSize={{md:"5xl",base:"3xl "}}
          fontWeight={700}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <LiaDonateSolid fontSize={"60px"} color="green" />
          Trust Fund
        </Box>
        <Divider />
        <Box
          w={"100%"}
          h={"90vh"}
          bg={"gray.100"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card w={"50%"} h={"65%"} p={6}>
            <CardBody
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
            >
              <Text
                fontSize="4xl"
                fontWeight={700}
                bg={"green.400"}
                color={"white"}
                p={4}
                textAlign={"center"}
                borderRadius={"full"}
              >
                Available Funds: 12,45,645 /-
              </Text>
              <NavLink to={"/transactionHistory"}>
                <Button variant={"outline"} fontSize="4xl" p={7} w={"70vh"}>
                  Transaction History
                </Button>
              </NavLink>
              <NavLink to={"/donate"}>
                <Button variant={"outline"} fontSize="4xl" p={7} w={"70vh"}>
                  Donate
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </Box>
        </Box>
        </ChakraProvider>
    </div>
  );
}

export default TrustFunds;
