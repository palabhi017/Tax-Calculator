import React,{useEffect, useState} from 'react'
import {Box, HStack, Input, VStack,Text, Checkbox, Button} from "@chakra-ui/react"

// I am using Chakra-ui for styling.

interface Data{
    BasicSalary: string,
    DA: string,
    Commission: string,
    HRAReceived:string,
    RentPaid:string,
    metrocity:boolean,
    ExemptedHRA:number,
  
}

// This component is created to calculate HRA (House Rent Allowance)

const HRA = () => {
  //  This state is created for storing final tax.
    const [taxable,setTaxable] = useState<number>(0)
  
  // This state is an object which is storing user's input.
    const [userData, setUserData] = useState<Data>({
        BasicSalary:'',
        DA: '',
        Commission: '',
        HRAReceived:'',
        RentPaid:'',
        metrocity:false,
        ExemptedHRA: 0,
       
      });

  // This function is handling changes in inputs and storing that inputs in state.
  // If user changes the input this function will run.
      const handleChange = (e:any) => {
    
      // This condition is applied to handle checkbox and other inputs.
        if(e.target.name==="metrocity"){
            setUserData((prevUserData: Data) => ({
                ...prevUserData,
                [e.target.name]: e.target.checked,
              }));
        }else{
            const { name, value } = e.target;
            setUserData((prevUserData: Data) => ({
              ...prevUserData,
              [name]: value,
            }));
        }
       
      };

// This function will run when user click on calculate button.
// This function is calculating exempted HRA and storing the result in state.

// I am using this formula in below function To calculate the Exempted House Rent Allowance:
// Exempted HRA = Minimum of the following three amounts
      const handleSubmit=()=>{

    // If user is from metro city this condition will run . if Not else condition will run.
        if(userData.metrocity===true){
            if(+userData.HRAReceived <= +(userData.BasicSalary+userData.Commission)/2 && +userData.HRAReceived <= +(Number(userData.RentPaid)-Number(userData.BasicSalary)*0.10)){
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: Math.floor(Number(userData.HRAReceived)),
                    }));
                   
            }else if(+(userData.BasicSalary+userData.Commission)/2 <= +userData.HRAReceived && +(userData.BasicSalary+userData.Commission)/2 <= +(Number(userData.RentPaid)-Number(userData.BasicSalary)*0.10) ){
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: Math.floor((Number(userData.BasicSalary) + Number(userData.Commission))/2),
                     
                  }));
               
            }else{
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: Math.floor(+userData.RentPaid - (Number(userData.DA)+ Number(userData.BasicSalary))*.1),
                  
                  }));
                 
            }
        }else{
            if(+userData.HRAReceived <= +(userData.BasicSalary+userData.Commission)*.4 && +userData.HRAReceived <= +(Number(userData.RentPaid)-Number(userData.BasicSalary)*0.10)){
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: Math.floor(Number(userData.HRAReceived)),
                    
                  }));
            }else if(+(userData.BasicSalary+userData.Commission)*.4 <= +userData.HRAReceived && +(userData.BasicSalary+userData.Commission)*.4 <= +(Number(userData.RentPaid)-Number(userData.BasicSalary)*0.10) ){
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: Math.floor((Number(userData.BasicSalary)+ Number(userData.Commission))*.4),
                     
                  }));
            }else{
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: Math.floor(+userData.RentPaid - (Number(userData.DA)+ Number(userData.BasicSalary))*.1),
                    
                    
                  }));
            }
        }
       
      }

// this function is created to reset all the fields.
const handleReset=()=>{
    setUserData({
        BasicSalary: '',
        DA: '',
        Commission: '',
        HRAReceived:'',
        RentPaid:'',
        metrocity:false,
        ExemptedHRA: 0,
       
      })
      setTaxable(0)
}

// In this useEffect function i am calculating taxable HRA and storing in a state.

// I am using this formula To calculate the Taxable House Rent Allowance:
// Taxable HRA = Actual HRA Received - Exempted HRA

  useEffect(()=>{
    setTaxable(Number(userData.HRAReceived)-userData.ExemptedHRA)
  },[userData.ExemptedHRA])
  return (
    <>
    
    <Box w="70vw" h={"80vh"}  m="auto" mt="5vh">
    <Box w={"30%"} h={"auto"} p="5px" color="white" textAlign={"center"} bgColor={"#3b9ac6"} fontSize={"1.2em"}  > HOUSE RENT ALLOWANCE</Box>
      <VStack h="auto" w="100%" gap={0} border="1px solid #e6e6e6">
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Basic salary</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"} value={userData.BasicSalary} textAlign={"right"} name='BasicSalary'  onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>DA forming part of salary</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"} value={userData.DA} textAlign={"right"} name="DA" onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"5px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Commission (as % of turnover achieved by the employee)</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"} value={userData.Commission} textAlign={"right"} name="Commission" onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>HRA Received</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"} value={userData.HRAReceived} textAlign={"right"} name="HRAReceived" onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Rent Paid</Text>
            <Input w="30%" bgColor={"white"} type='number' border={"1px solid #333"} value={userData.RentPaid} textAlign={"right"} name="RentPaid" onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Tick if residing in metro city.</Text>
            <Text fontWeight={"bold"}><Checkbox as="span" name="metrocity" checked={userData.metrocity} onChange={handleChange}></Checkbox>  (Tick if Yes) </Text> 
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Exempted House Rent Allowance</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly value={userData.ExemptedHRA} textAlign={"right"} ></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Taxable House Rent Allowance</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} readOnly value={taxable} textAlign={"right"} ></Input>
        </HStack>
      </VStack>
      <HStack w="25%" m="auto" mt="10px">
        <Button bgColor={"tomato"} color={"white"} onClick={handleSubmit}>Calculate</Button>
        <Button bgColor={"#999"} color={"white"} onClick={handleReset}>Reset</Button>
      </HStack>
    </Box>
    </>
  )
}

export default HRA