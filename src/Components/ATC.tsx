import { Box, HStack, Input, VStack,Text, Select,Button} from '@chakra-ui/react'
import React from 'react'
import Selects from './Selects'
import Individual from './Individual'

const ATC = () => {
  return (
    <Box w="70vw" h={"80vh"}  m="auto" mt="5vh">
    <Box w={"60%"} h={"auto"} p="5px" color="white" textAlign={"center"} bgColor={"#3b9ac6"} fontSize={"1.2em"}  >ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</Box>
    <VStack h="auto" w="100%" gap={0} border="1px solid #e6e6e6">
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
          
            <Text fontSize={"1.2em"}>Tax Payer</Text>
           <Select w="30%" bgColor="white">
            <option value="Individual">Individual</option>
            <option value="">HUF</option>
            <option value="">AOPs/BOI</option>
            <option value="">Domestic Company</option>
            <option value="">Foreign Company</option>
            <option value="">Firms</option>
            <option value="">LLP</option>
            <option value="">Co-Operative Society</option>
           </Select>
        </HStack>
        <Individual/>
    </VStack>
    <HStack w="25%" m="auto" mt="10px">
        <Button bgColor={"tomato"} color={"white"} >Calculate</Button>
        <Button bgColor={"#999"} color={"white"} >Reset</Button>
      </HStack>
    </Box>
  )
}

export default ATC