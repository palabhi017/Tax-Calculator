import { Box, HStack, Input, VStack,Text, Select,Button, useToast} from '@chakra-ui/react'
import React, { useState } from 'react'
import Selects from './Selects'
import Individual from './Individual'
import Cooperate from './Cooperate'

const ATC = () => {
  const [category,SetCategory] = useState<string>("Individual")
  const [assessedTax,setAssessedTax] = useState(0)
  let toast = useToast()
  const handleCalc =()=>{
    if(assessedTax<=10000){
        toast({
            title: 'Error',
            position:"top",
            description: "Advance tax is not payable if Assessed tax is less than RS. 10,000/-",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
    }else{
        toast({
            title: 'Assessed Tax',
            position:"top",
            description: `Your Assessed Tax is ${assessedTax}`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }
    
}
  return (
    <Box w="70vw" h={"80vh"}  m="auto" mt="5vh">
    <Box w={"60%"} h={"auto"} p="5px" color="white" textAlign={"center"} bgColor={"#3b9ac6"} fontSize={"1.2em"}  >ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</Box>
    <VStack h="auto" w="100%" gap={0} border="1px solid #e6e6e6">
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
          
            <Text fontSize={"1.2em"}>Tax Payer</Text>
           <Select w="30%" bgColor="white"  onChange={(e)=> SetCategory(e.target.value)}>
            <option value="Individual">Individual</option>
            <option value="HUF">HUF</option>
            <option value="AOPs/BOI">AOPs/BOI</option>
            <option value="DC">Domestic Company</option>
            <option value="FC">Foreign Company</option>
            <option value="Firms">Firms</option>
            <option value="LLP">LLP</option>
            <option value="COS">Co-Operative Society</option>
           </Select>
        </HStack>
        {category===""? <Selects/>:"" }

       {category==="Individual"? <Individual handleCalc={(e:number)=> setAssessedTax(e)}/>:"" }
       {category==="HUF" || category==="AOPs/BOI" || category==="DC" || category==="FC" || category==="Firms" || category==="LLP"? <Selects/>:"" }
       {category==="COS"? <Cooperate/>:"" }
       
    </VStack>
    <HStack w="25%" m="auto" mt="10px">
        <Button bgColor={"tomato"} color={"white"} onClick={handleCalc}>Calculate</Button>
        <Button bgColor={"#999"} color={"white"} >Reset</Button>
      </HStack>
    </Box>
  )
}

export default ATC