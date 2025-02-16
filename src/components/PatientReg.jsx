import React from "react";
import Sidebar from "./sidebar";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Heading,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
function PatientReg() {
  return (
    <>
      <ChakraProvider>
        <Sidebar />
        <Box
          ml={"64px"}
          w={{ sm: "94vw", base: "81w" }}
          h={"100vh"}
          bg={"gray.100"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card
            w={{ sm: "60%", base: "95%" }}
            h={{ md: "70%", base: "auto" }}
            p={6}
          >
            <CardHeader>
              <Heading fontSize={{ md: "4xl", base: "xl" }}>
                Patient Registration
              </Heading>
            </CardHeader>
            <CardBody>
              <Box
                display={"flex"}
                flexDirection={{ sm: "row", base: "column" }}
                gap={4}
              >
                <Box flex={1} display={"flex"} flexDirection={"column"} gap={6}>
                  <Input placeholder="Enter Name of Patient" />
                  <Input placeholder="Enter Age of Patient" />
                  <Input placeholder="Injuries if any" />
                  <Input placeholder="Estimated Severity" />
                </Box>
                <Box flex={1} display={"flex"} flexDirection={"column"} gap={6}>
                  <Input placeholder="Enter Blood Group" />
                  <Input placeholder="Enter Address" />
                  <Input placeholder="Enter Contact Number" />
                  <Input placeholder="Allergies/Diseases patient has" />
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={10}
              >
                <Button colorScheme="green">Register</Button>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default PatientReg;
