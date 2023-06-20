import React,{useEffect, useState} from 'react'
import {Box, HStack, Input, VStack,Text, Checkbox, Button} from "@chakra-ui/react"

interface Data{
    BasicSalary: number,
    DA: number,
    Commission: number,
    HRAReceived:number,
    RentPaid:number,
    metrocity:boolean,
    ExemptedHRA:number,
  
}

const HRA = () => {
    const [taxable,setTaxable] = useState(0)
    const [userData, setUserData] = useState<Data>({
        BasicSalary: 0,
        DA: 0,
        Commission: 0,
        HRAReceived:0,
        RentPaid:0,
        metrocity:false,
        ExemptedHRA: 0,
       
      });
    
      const handleChange = (e:any) => {
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

      const handleSubmit=()=>{
        if(userData.metrocity===true){
            if(+userData.HRAReceived <= +(userData.BasicSalary+userData.Commission)/2 && +userData.HRAReceived <= +(userData.RentPaid-userData.BasicSalary*0.10)){
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: userData.HRAReceived,
                    }));
                   
            }else if(+(userData.BasicSalary+userData.Commission)/2 <= +userData.HRAReceived && +(userData.BasicSalary+userData.Commission)/2 <= +(userData.RentPaid-userData.BasicSalary*0.10) ){
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: (userData.BasicSalary+userData.Commission)/2,
                     
                  }));
               
            }else{
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: +userData.RentPaid - (Number(userData.DA)+ Number(userData.BasicSalary))*.1,
                  
                  }));
                 
            }
        }else{
            if(+userData.HRAReceived <= +(userData.BasicSalary+userData.Commission)*.4 && +userData.HRAReceived <= +(userData.RentPaid-userData.BasicSalary*0.10)){
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: userData.HRAReceived,
                    
                  }));
            }else if(+(userData.BasicSalary+userData.Commission)*.4 <= +userData.HRAReceived && +(userData.BasicSalary+userData.Commission)*.4 <= +(userData.RentPaid-userData.BasicSalary*0.10) ){
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: (userData.BasicSalary+userData.Commission)*.4,
                     
                  }));
            }else{
                setUserData((prevUserData: Data) => ({
                    ...prevUserData,
                     ExemptedHRA: +userData.RentPaid - (Number(userData.DA)+ Number(userData.BasicSalary))*.1,
                    
                    
                  }));
            }
        }
       
      }
  useEffect(()=>{
    setTaxable(userData.HRAReceived-userData.ExemptedHRA)
  },[userData.ExemptedHRA])
  return (
    <Box w="70vw" h={"80vh"}  m="auto" mt="5vh">
      <VStack h="auto" w="100%" gap={0} border="1px solid #e6e6e6">
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Basic salary</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} textAlign={"right"} name='BasicSalary'  onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>DA forming part of salary</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} textAlign={"right"} name="DA" onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"5px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Commission (as % of turnover achieved by the employee)</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} textAlign={"right"} name="Commission" onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>HRA Received</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} textAlign={"right"} name="HRAReceived" onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} bgColor={"#e6e6e6"}>
            <Text fontSize={"1.2em"}>Rent Paid</Text>
            <Input w="30%" bgColor={"white"} border={"1px solid #333"} textAlign={"right"} name="RentPaid" onChange={handleChange}></Input>
        </HStack>
        <HStack w="100%" h="auto" justifyContent={"space-between"} p={"10px 20px"} >
            <Text fontSize={"1.2em"}>Tick if residing in metro city.</Text>
            <Text fontWeight={"bold"}><Checkbox as="span" name="metrocity" onChange={handleChange}></Checkbox>  (Tick if Yes) </Text> 
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
        <Button bgColor={"#999"} color={"white"}>Reset</Button>
      </HStack>
    </Box>
  )
}

export default HRA