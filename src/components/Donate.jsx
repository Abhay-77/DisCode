import React from "react";
import Sidebar from "./sidebar";
import { Box, Divider, Card, CardBody, Text, AbsoluteCenter, Img, Input, Button } from "@chakra-ui/react";
import { LiaDonateSolid } from "react-icons/lia";
import { ChakraProvider } from "@chakra-ui/react";
import scan from "../assets/scan.jpg";

function Donate() {
  return (
    <div>
      <ChakraProvider>
      <Sidebar />
      <Box ml={"64px"}>
        <Box
          ml={"70px"}
          p={3}
          fontSize="5xl"
          fontWeight={700}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <LiaDonateSolid fontSize={"60px"} color="green" />
          Donate
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
          <Card w={"60%"} h={"80%"} p={6}>
            <CardBody
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
            >
                <Box flex={1} display={'flex '} flexDirection={'column'} gap={4}>
                  <Input placeholder="Enter Name" />
                  <Input placeholder="Enter Card No." />
                  <Input placeholder="Enter Amount" />
                  <Input placeholder="Expiry Date" />
                  <Input placeholder="CVV" />
                  <Button colorScheme="green">Donate</Button>
                </Box>
                  <Divider orientation='vertical'/>
                <Box flex={1}>
                  <Img src={scan} alt="scan" h={'450px'} />
                </Box>
            </CardBody>
          </Card>
        </Box>
        </Box>
        </ChakraProvider>
    </div>
  );
}

export default Donate;
