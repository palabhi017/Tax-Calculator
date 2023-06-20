import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HRA from './HRA'
import ATC from './ATC'

const AllRoutes = () => {
  return (
   <Routes>
     <Route path='/' element={<HRA/>}/>
     <Route path='/atc' element={<ATC/>}/>
   </Routes>
  )
}

export default AllRoutes