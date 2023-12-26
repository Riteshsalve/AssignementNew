import React from 'react'
import {Route,Routes} from "react-router-dom"
import Homepage from './Homepage'
import DetailsComponent from '../components/DetailsComponent'
function Mainroutes() {
  return (
   
    <Routes>

<Route  path='/' element={<Homepage/>}/>
<Route  path='/edit/:id' element={<DetailsComponent/>}/>

    </Routes>

  )
}

export default Mainroutes
