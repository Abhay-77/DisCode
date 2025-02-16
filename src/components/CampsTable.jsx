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
import { useEffect, useState } from "react";

export default () => {
  // const data = [
  //   {
  //     name: "Mec",
  //     beds: 2,
  //     cloths: 3,
  //     food: 5,
  //     water: 10,
  //   },
  //   {
  //     name: "Mes",
  //     beds: 4,
  //     cloths: 6,
  //     food: 7,
  //     water: 10,
  //   },
  //   {
  //     name: "CUSAT",
  //     beds: 9,
  //     cloths: 5,
  //     food: 8,
  //     water: 10,
  //   },
  //   {
  //     name: "Rajagiri",
  //     beds: 7,
  //     cloths: 4,
  //     food: 5,
  //     water: 8,
  //   },
  //   {
  //     name: "St Alberts",
  //     beds: 8,
  //     cloths: 6,
  //     food: 4,
  //     water: 6,
  //   },
  // ];

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await fetchCampsData();
    setData(result);
  }
  return (
    <>
      <div className="abovetablebox"></div>
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
                <Th>Camp name</Th>
                <Th>Beds</Th>
                <Th>Cloths</Th>
                <Th>Food</Th>
                <Th>Water(liTres)</Th>
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
                    <Td>{e.water}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    </>
  );
};
