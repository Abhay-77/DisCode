import {
  TableContainer,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { fetchCampsData } from "../data";
import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./sidebar.jsx";

function TransacHis() {
  const data = [
    {
      name: "anonymous",
      beds: "03:15",
      cloths: "2-2-2025",
      food: 5000,
    },
    {
      name: "anonymous",
      beds: "18:33",
      cloths: "3-3-2025",
      food: 700,
    },
    {
      name: "anonymous",
      beds: "12:45",
      cloths: "14-4-2024",
      food: 8000,
    },
    {
      name: "anonymous",
      beds: "09:37",
      cloths: "25-5-2024",
      food: 50,
    },
    {
      name: "anonymous",
      beds: "15:23",
      cloths: "16-6-2023",
      food: 40000,
    },
  ];

  return (
    <>
      <ChakraProvider>
        <Sidebar />
        <TableContainer
          color={"black"}
          bg={"white"}
          borderRadius={"10px"}
          width={"80%"}
          ml={"64px"}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Donor</Th>
                <Th>Time</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.map((e) => (
                  <Tr key={e.name}>
                    <Td>{e.name}</Td>
                    <Td>{e.beds}</Td>
                    <Td>{e.cloths}</Td>
                    <Td>{e.food}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    </>
  );
}

export default TransacHis;
