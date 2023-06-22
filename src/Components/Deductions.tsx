import React, { useEffect, useState } from 'react'
import { HStack, Input, Text} from "@chakra-ui/react"

// This component is created for getting user input and calculating deduction based on the inputs.


const Deductions = ({data}:{data:(amount:number)=>void}) => {
    const [contribution,setContribution] = useState(0)
    const [agnipathScheme,setAgnipathScheme] = useState(0)

    const handleChange=(e:any)=>{
        if(e.target.name==="contribution"){
            setContribution(e.target.value)
        }else if(e.target.name==="agnipathScheme"){
            setAgnipathScheme(e.target.value)
        }
    }
    useEffect(()=>{
       data(Number(contribution)+ Number(agnipathScheme))
    },[contribution,agnipathScheme])
  return (
   <>
   <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>Employer's contribution toward NPS (u/s 80CCD)</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"}  name="contribution" textAlign={"right"} onChange={handleChange} ></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>Contribution to Agnipath Scheme (u/s 80CCH)</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"}  name="agnipathScheme" textAlign={"right"} onChange={handleChange} ></Input>
    </HStack>
   </>
  )
}

export default Deductions