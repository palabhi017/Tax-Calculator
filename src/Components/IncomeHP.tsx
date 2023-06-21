import React, { useEffect, useState } from 'react'
import { HStack, Input, Text} from "@chakra-ui/react"

const IncomeHP = ({data}:{data:(amount:number)=>void}) => {
    const [totalIncome,settotalIncome] = useState(0)
    const [municipalTaxes,setmunicipalTaxes] = useState(0)
    const [unrealizedRent,setunrealizedRent] = useState(0)
    const [housingLoan,sethousingLoan] = useState(0)
    const [netAnnualValue,setnetAnnualValue] = useState(0)
    const [standardDeduction,setstandardDeduction] = useState(0)
    const [letoutHouseProperty,setletoutHouseProperty] = useState(0)
    
    const calculateIncome=()=>{
        if(totalIncome!==0){
            let a:number=0
            let b:number=0
            let c:number=0
              a=(Number(totalIncome)- (Number(municipalTaxes)+Number(unrealizedRent)))
              b= a*.3 
              c= a-(b+ Number(housingLoan))
              setnetAnnualValue(a)
              setstandardDeduction(b)
              setletoutHouseProperty(c)
              
        }
        
       
    }
    const handleChange=(e:any)=>{
        if(e.target.name==="totalIncome"){
            settotalIncome(e.target.value)
        }else if(e.target.name==="municipalTaxes"){
            setmunicipalTaxes(e.target.value)
        }else if(e.target.name==="unrealizedRent"){
            setunrealizedRent(e.target.value)
        }else if(e.target.name==="housingLoan"){
            sethousingLoan(e.target.value)
        }
       
    }
    useEffect(()=>{
        calculateIncome()
       
    },[totalIncome,unrealizedRent,municipalTaxes,housingLoan])
    useEffect(()=>{
        data(letoutHouseProperty)
    },[letoutHouseProperty])
  return (
  <>
  <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>b. Income from Let-out Property</Text>
            
    </HStack> 
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>1. Annual Letable Value/Rent Received or Receivable</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"}  name="totalIncome" textAlign={"right"} onChange={handleChange} ></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>2. Less: Municipal Taxes Paid During the Year</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} name="municipalTaxes"  textAlign={"right"} onChange={handleChange}></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>3. Less:Unrealized Rent</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} name="unrealizedRent"  textAlign={"right"} onChange={handleChange}></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>4. Net Annual Value (1-(2+3))</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly value={netAnnualValue} textAlign={"right"} ></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>Less: Deductions from Net Annual Value</Text>
           
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>i. Standard Deduction @ 30% of Net Annual Value</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly value={standardDeduction} textAlign={"right"} ></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>ii. Interest on Housing Loan</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} name="housingLoan" textAlign={"right"} onChange={handleChange}></Input>
    </HStack>
    <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#b4b4b4"} >
            <Text fontSize={"1.2em"}>Income from Let-out House Property</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly value={letoutHouseProperty} textAlign={"right"} ></Input>
    </HStack>
  </>
    
  )
}

export default IncomeHP