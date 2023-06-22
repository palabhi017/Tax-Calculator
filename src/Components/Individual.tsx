import React, { useEffect, useState } from 'react'
import { HStack, Input , Text,  Select, Button} from "@chakra-ui/react"
import IncomeHP from './IncomeHP'
import IncomeOS from './IncomeOS'

// This is a calculator for individual category.


const Individual = ({handleCalc}:{handleCalc:(e:number)=>void}) => {
    const [ihouseRent,setIHouseRent]= useState<boolean>(false)
    const [iothersorce,setOtherSorce]= useState<boolean>(false)
    const [deduct,setDeduct]= useState<boolean>(false)
    const [incomeD,setIncomeD] = useState(0)
    const [incomeHP,setIncomeHP] = useState<number>(0)
    const [incomeOS,setIncomeOS] = useState<number>(0)
    const [tax,setTax] = useState<number>(0)
    const [totaltax,setTotalTax] = useState<number>(0)
    const [edutax,setEduTax] = useState<number>(0)
    const [netIncome,setNetIncome] = useState<number>(0)
    const [relief,setRelief] = useState("")
    const [tds,setTds] = useState("")
    const [assessedTax,setAssesedTax] = useState(0)
    const [userData,setUserData] = useState({
        ISalary:0,
        CapitalGain:0,
        Profit:0,
    })
   // This variables for storing calculated data and then they are passing to the state.
   let temp=0
   let temp2=0
   let temp3=0

   // This function is handling user input and storing in states.
   const handleChange=(e:any)=>{
    const {name,value}= e.target
    setUserData(prev => ( {...prev, [name]: value}))
   }

// This useEffect for calculating and updating net Income. This function will run when its dependecies 
// state will change.
useEffect(()=>{
    setNetIncome((Number(userData.ISalary) + Number(incomeHP) + Number(incomeOS) + Number(userData.Profit) + Number(userData.CapitalGain))- Number(incomeD))
   
},[userData,incomeD,incomeOS,incomeHP])

// In this function i am calculating applicable tax for that i am using this formula.
// Up to ₹2,50,000: No tax
// ₹2,50,001 to ₹5,00,000: 5% of (Total Income - ₹2,50,000)
// ₹5,00,001 to ₹10,00,000: ₹12,500 + 20% of (Total Income - ₹5,00,000)
// Above ₹10,00,000: ₹1,12,500 + 30% of (Total Income - ₹10,00,000)

useEffect(()=>{
    if(netIncome<= 250000){
        temp=0
        temp2=0
        temp3=0
    }else if(Number(netIncome)<=500000){
     
        temp=Number(netIncome-250000)*.05
        temp2= temp*.04
        temp3=temp+temp2
    }else if(netIncome<=1000000){
        
        temp=12500 + Number(netIncome-500000)*.2
        temp2=temp*.04
        temp3=temp+temp2
    }else{
      
        temp=112500 + netIncome*.3
        temp2=temp*.04
        temp3=temp+temp2

    }
},[netIncome])


// with this function i am manipulating input boxes values.
// and updating current value based on inputs.
useEffect(()=>{
    setTax(temp)
    setEduTax(temp2)
    setTotalTax(temp3)
    setAssesedTax(temp3 - (Number(relief) + Number(tds)))
    handleCalc(assessedTax)
},[netIncome,relief,tds])

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
            <Text fontSize={"1.2em"}>Income from Salary </Text>
            <Input type={"number"} w="30%" bgColor={"white"} name='ISalary' border={"1px solid #333"} onChange={handleChange}  textAlign={"right"} ></Input>

        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Income From House Property </Text>
            <HStack w="40%" justifyContent={"space-between"}>
             <Button h="auto" w="30%" fontSize={"1em"} bgColor={"#333"} color="white" onClick={()=> setIHouseRent(!ihouseRent)}>Show details</Button>
            <Input type={"number"} w="60%"  bgColor={"#e6e6e6"} border={"1px solid #333"} value={incomeHP} readOnly textAlign={"right"} ></Input>
            </HStack>
        </HStack>
        {ihouseRent? <IncomeHP data={(amount: number)=> setIncomeHP(amount)}/>:""}
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Capital Gains</Text>
            <Input type={"number"} w="30%" bgColor={"#e6e6e6"} name="CapitalGain" border={"1px solid #333"}  onChange={handleChange} textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"} >
            <Text fontSize={"1.2em"}>Income From Other Sources</Text>
            <HStack w="40%" justifyContent={"space-between"}>
             <Button h="auto" w="30%" fontSize={"1em"} bgColor={"#333"} color="white" onClick={()=> setOtherSorce(!iothersorce)}>Show details</Button>
            <Input type={"number"} w="60%"  border={"1px solid #333"} value={incomeOS} readOnly textAlign={"right"} ></Input>
            </HStack>
        </HStack>
        {iothersorce? <IncomeOS data={(amount: number)=> setIncomeOS(amount)}/>:""}

        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Profits and Gains of Business or Profession (enter profit only)</Text>
            <Input type={"number"} w="30%" bgColor={"white"} name="Profit" border={"1px solid #333"}   onChange={handleChange} textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"} >
            <Text fontSize={"1.2em"}>Agricultural Income</Text>
            <Input type={"number"} w="30%" bgColor={"white"} border={"1px solid #333"} readOnly  textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Deductions</Text>
            <HStack w="40%" justifyContent={"space-between"}>
             <Button h="auto" w="30%" fontSize={"1em"} bgColor={"#333"} color="white" onClick={()=> setDeduct(!deduct)}>Show details</Button>
            <Input type={"number"} w="60%"  bgColor={"#e6e6e6"} border={"1px solid #333"} value={incomeD} readOnly textAlign={"right"} ></Input>
            </HStack>
        </HStack>
        {deduct? <IncomeOS data={(amount: number)=> setIncomeD(amount)}/>:""}

        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Net Taxable Income</Text>
            <Input type={"number"} w="30%" bgColor={"#e6e6e6"} border={"1px solid #333"} readOnly value={netIncome} textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"} >
            <Text fontSize={"1.2em"}>Income Tax after relief u/s 87A</Text>
            <Input type={"number"} w="30%" bgColor={"#e6e6e6"} border={"1px solid #333"} readOnly value={tax} textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"5px 20px"} >
            <Text fontSize={"1.2em"}>Surcharge</Text>
            <Input type={"number"} w="30%" bgColor={"#e6e6e6"}  border={"1px solid #333"} value={0} readOnly textAlign={"right"} name="Commission" ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"}>
            <Text fontSize={"1.2em"}>Health and Education Cess</Text>
            <Input type={"number"} w="30%" bgColor={"#e6e6e6"} value={edutax} border={"1px solid #333"} readOnly textAlign={"right"} name="HRAReceived" ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Total Tax Liability</Text>
            <Input type={"number"} w="30%" bgColor={"#e6e6e6"}  border={"1px solid #333"} readOnly value={totaltax} textAlign={"right"} name="HRAReceived" ></Input>

        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Relief</Text>
            <Input type={"number"} w="30%" bgColor={"white"} border={"1px solid #333"} onChange={(e)=> setRelief(e.target.value)} textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"} >
            <Text fontSize={"1.2em"}>TDS/TCS/MAT (AMT) Credit Utilized</Text>
            <Input type={"number"} w="30%" bgColor={"white"} border={"1px solid #333"} onChange={(e)=> setTds(e.target.value)}  textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Assessed Tax</Text>
            <Input type={"number"} w="30%" bgColor={"white"} border={"1px solid #333"} readOnly value={assessedTax}  textAlign={"right"} ></Input>
        </HStack>
    </>
  )
}

export default Individual