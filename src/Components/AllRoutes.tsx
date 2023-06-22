import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HRA from './HRA'
import ATC from './ATC'

// this component contains all routes of our application. 
//which is used to navigate between components. 
const AllRoutes = () => {
  return (
   <Routes>
     <Route path='/' element={<HRA/>}/>
     <Route path='/atc' element={<ATC/>}/>
   </Routes>
  )
}

export default AllRoutes