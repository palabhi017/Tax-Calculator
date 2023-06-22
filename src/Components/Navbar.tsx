import { Box,HStack } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active,setActive] = useState<boolean>(false)
  return (
    <HStack w="100vw" h="10vh" border={"1px solid #3b9ac6"} justifyContent={"space-around"} alignItems={"center"}>
<Link to="/" style={{width:"30%",height:"60%",textDecoration:"none"}}><Box w={"100%"} h={"100%"} bgColor={active? "#d9dade": "#3b9ac6"} color="white" textAlign={"center"} fontSize={"1.2em"} onClick={()=> setActive(false)} > HOUSE RENT ALLOWANCE</Box></Link>
<Link to="/atc" style={{width:"30%",height:"60%",textDecoration:"none"}}><Box w={"100%"} h={"100%"} bgColor={active? "#3b9ac6": "#d9dade"} color="white" textAlign={"center"} fontSize={"1.2em"} onClick={()=> setActive(true)}>ADVANCE TAX CALCULATOR </Box></Link>
  </HStack>
  )
}

export default Navbar