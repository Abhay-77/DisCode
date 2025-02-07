import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  TableContainer,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";

const PatientList = () => {
  const data = [
    {
      name: "Rahul",
      rate: 1,
    },
    {
      name: "Gopal",
      rate: 5,
    },
    {
      name: "Dany",
      rate: 4,
    },
    {
      name: "Robin",
      rate: 9,
    },
    {
      name: "John",
      rate: 2,
    },
  ];
  return (
    <ChakraProvider>
      <TableContainer
        color={"black"}
        bg={"white"}
        borderRadius={"10px"}
        width={"80%"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Patient's name</Th>
              <Th>Severity rate</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((e) => (
                <Tr key={e.name}>
                  <Td>{e.name}</Td>
                  <Td>{e.rate}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
};

import Sidebar from "./components/sidebar";

const Patients = () => {
  return (
    <>
      <Sidebar icon={<FaPlus/>}/>
      <section className="camppage">
        <nav className="patientnav">Patient Diagnosis</nav>
        <PatientList />
      </section>
    </>
  );
};

export default Patients;
