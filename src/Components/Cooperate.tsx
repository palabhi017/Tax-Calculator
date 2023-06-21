import React from 'react'
import { HStack, Input, Text, Checkbox, Select} from "@chakra-ui/react"

const Cooperate = () => {
  return (
    <>
     <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Co-operative society opted and qualify for section 115BAD</Text>
            <Select w="30%">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </Select>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Co-operative society opted and qualify for section 115BAE</Text>
            <Select w="30%">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </Select>
        </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Net Taxable Income</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"}  textAlign={"right"} name='BasicSalary'  ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Income Tax</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"}  textAlign={"right"} name="DA" ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"5px 20px"} >
            <Text fontSize={"1.2em"}>Surcharge</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"}  textAlign={"right"} name="Commission" ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Education Cess</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"}  textAlign={"right"} name="HRAReceived" ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Secondary and higher education cess</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"}  textAlign={"right"} name="RentPaid"></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Total Tax Liability</Text>
            <Text fontWeight={"bold"}><Checkbox as="span" name="metrocity"  ></Checkbox>  (Tick if Yes) </Text> 
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Relief</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly  textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"} >
            <Text fontSize={"1.2em"}>TDS/TCS/MAT (AMT) Credit Utilized</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly  textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Assessed Tax</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly  textAlign={"right"} ></Input>
        </HStack>
    </>
  )
}

export default Cooperate