import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";

const SplitTax = ({ totalTax }: { totalTax: number }) => {

    let installment = Math.floor(totalTax/5)



  return (
    <>
     <Text
        textAlign={"center"}
        mt="40px"
        fontSize={"1.3em"}
        fontWeight={"bold"}
      >
        Advance Tax Liability
      </Text>
      <TableContainer border="1px solid black" m="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Description</Th>
              <Th>Advance Tax Liability</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Advance Tax payable upto june 16, 2023</Td>
              <Td>{installment}</Td>
            </Tr>
            <Tr>
              <Td>Advance Tax payable upto September 15, 2023</Td>
              <Td>{installment*2}</Td>
            </Tr>
            <Tr>
              <Td>Advance Tax payable upto December 15, 2023</Td>
              <Td>{installment*3}</Td>
            </Tr>
            <Tr>
              <Td>Advance Tax payable upto March 15, 2024</Td>
              <Td>{installment*4}</Td>
            </Tr>
            <Tr>
              <Td>Advance Tax payable upto March 31, 2024</Td>
              <Td>{installment*5}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer >
      <Text
        textAlign={"center"}
        mt="40px"
        fontSize={"1.3em"}
        fontWeight={"bold"}
      >
        Advance Tax Installments
      </Text>
      <TableContainer mt="20px" border="1px solid black">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>DESCRIPCITON</Th>
              <Th>INSTALLMENTS</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                First Installment payable for the period April 1,2023 to june
                15, 2023
              </Td>
              <Td>{installment}</Td>
            </Tr>
            <Tr>
              <Td>
                Second Installment payable for the period June 16,2023 to
                September 15, 2023
              </Td>
              <Td>{installment}</Td>
            </Tr>
            <Tr>
              <Td>
                Third Installment payable for the period September 16,2023 to
                December 15, 2023
              </Td>
              <Td>{installment}</Td>
            </Tr>
            <Tr>
              <Td>
                Fourth Installment payable for the period December 16,2023 to
                March 15, 2024
              </Td>
              <Td>{installment}</Td>
            </Tr>
            <Tr>
              <Td>
                Third Installment payable for the period March 16,2024 to March
                31, 2024
              </Td>
              <Td>{installment}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SplitTax;
