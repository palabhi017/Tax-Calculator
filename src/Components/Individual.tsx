import React from 'react'
import { HStack, Input, Text, Checkbox, Select} from "@chakra-ui/react"

const Individual = () => {
  return (
    <>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Whether opting for taxation under Section 115BAC?</Text>
            <Select w="30%">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </Select>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Male / Female / Senior Citizen</Text>
            <Select w="30%">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="sc">Senior Citizen</option>
                <option value="ssc">Super Senior Citizen</option>
            </Select>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"5px 20px"} >
            <Text fontSize={"1.2em"}>Residential Status</Text>
            <Select w="30%">
                <option value="Resident">Resident</option>
                <option value="non-Resident">Non-Resident</option>
                <option value="nor">Non Ordinary Resident</option>
               
            </Select>
        </HStack>
       
       <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.1em"}>Income from Salary (Income from salary after standard deduction of Rs.50000.)</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly  textAlign={"right"} ></Input>

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

export default Individual