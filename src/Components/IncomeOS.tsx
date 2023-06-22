import React, { useEffect, useState } from 'react'
import { HStack, Input, Text} from "@chakra-ui/react"

// This component is created for getting user input and calculating "Income from other Source" based on the inputs.


const IncomeOS = ({data}:{data:(amount:number)=>void}) => {
    const [interest,setInterest] = useState(0)
    const [commission,setCommission] = useState(0)
    const [ lottery,setLottery] = useState(0)
    const handleChange=(e:any)=>{
        if(e.target.name==="interest"){
            setInterest(e.target.value)
        }else if(e.target.name==="commission"){
            setCommission(e.target.value)
        }else if(e.target.name==="lottery"){
            setLottery(e.target.value)
        }
    }
    useEffect(()=>{
       data(Number(interest)+ Number(commission) + Number(lottery))
    },[interest,commission,lottery])
  return (
    <>
     <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>Interest</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"}  name="interest" textAlign={"right"} onChange={handleChange} ></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>Commission/Other Income</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"}  name="commission" textAlign={"right"} onChange={handleChange} ></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>Winnings from Lottery, Crossword Puzzles, etc.</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"}  name="lottery" textAlign={"right"} onChange={handleChange} ></Input>
    </HStack>
    </>
  )
}

export default IncomeOS