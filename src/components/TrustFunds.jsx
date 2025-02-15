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
          ml={{md:"70px",base:"10px"}}
          p={3}
          fontSize={{md:"5xl",base:"3xl "}}
          fontWeight={700}
          display={"flex"}
          alignItems={"center"}
            flexDirection={"row"}
            zIndex={1000}
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
            zIndex={500}
        >
          <Card w={{md:"50%",base:"100vw"}} h={{md:"65%",base:"100vw"}} p={6}  zIndex={500}> 
            <CardBody
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
            >
              <Text
                fontSize={{ md: "4xl", base: "xl" }}
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
                <Button variant={"outline"}  fontSize={{ md: "4xl", base: "xl" }} p={7} w={{md:"70vh",base:"auto"}}>
                  Transaction History
                </Button>
              </NavLink>
              <NavLink to={"/donate"}>
                <Button variant={"outline"} fontSize={{ md: "4xl", base: "xl" }} p={7} w={{md:"70vh",base:"auto"}}>
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
