import { ChakraProvider, flexbox } from "@chakra-ui/react";
import {
  TableContainer,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Checkbox,
} from "@chakra-ui/react";

export default () => {
  const data = [
    {
      name: "Table",
      quantity: 2,
      ready: true,
    },
    {
      name: "Chair",
      quantity: 1,
      ready: true,
    },
    {
      name: "Cloths",
      quantity: 4,
      ready: true,
    },
    {
      name: "Bed",
      quantity: 5,
      ready: true,
    },
    {
      name: "Utensils",
      quantity: 7,
      ready: true,
    },
    {
      name: "Food packets",
      quantity: 6,
      ready: true,
    },
  ];
  const [product, setProduct] = useState({})
  const [newData, setNewData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    setSearchValue(value);
    setNewData(
      data.filter((e) => {
        if (e.name.toLowerCase().includes(value.toLowerCase())) return true;
        return false;
      })
    );
  }
  function hChange(e) {
    setProduct({...product,[e.target.name]:e.target.value})
  }
  function addItem() {
    setNewData([...newData,product])
  }
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <section className="camppage">
          <div className="searchadd">
            <InputGroup width={"75%"}>
              <InputLeftElement>
                <CiSearch />
              </InputLeftElement>
              <Input
                type="text"
                bg={"white"}
                width={"100%"}
                pl={"2rem"}
                onChange={(e) => handleChange(e)}
                value={searchValue}
              />
            </InputGroup>
            <BasicUsage hChange={hChange} addItem={addItem}/>
          </div>
          <InvTable data={newData} />
        </section>
      </ChakraProvider>
    </>
  );
};
function InvTable({ data }) {
  return (
    <>
      <TableContainer
        color={"black"}
        bg={"white"}
        borderRadius={"10px"}
        width={"80%"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Quantity</Th>
              <Th>Ready</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((e) => (
                <Tr key={e.name}>
                  <Td>{e.name}</Td>
                  <Td>{e.quantity}</Td>
                  <Td>
                    <input type="checkbox" checked={e.ready} readOnly />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
function BasicUsage({hChange,addItem}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Register</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={"column"} gap={"10px"}>
            Name{" "}
            <Input
              type="text"
              name="name"
              width={"15rem"}
              placeholder="Name"
              onChange={hChange}
              required
            />
            Quantity
            <Input
              type="text"
              name="quantity"
              width={"15rem"}
              placeholder="Quantity"
              onChange={hChange}
              required
            />
            <Checkbox name="ready" width={"2rem"} onChange={hChange}>
              Ready
            </Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={addItem}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
