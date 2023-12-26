import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
function Catmainpage() {

    const [data,setData] =useState([])


    useEffect(()=>{

axios.get("https://api.thecatapi.com/v1/breeds?limit=10&page=0")
.then((res)=>{
    setData(res)
})
.catch((err)=>{

    console.log(err)

})


    },[])



  return (
    <div>
     <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Breed Name</Th>
        
        <Th>Breed Origin</Th>

        <Th >Details</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
          data.data?.length>0 && data.data.map((el)=>(
            <Tr key={el.id}>
             <Td>{el.name}</Td>
             <Td>{el.origin}</Td>
             <Td>
                <Link to={`/edit/${el.id}`}>
                <button style={{color:"blue"}}>View</button>
                </Link>
                </Td>      
               </Tr>
           ))
        }
      
      
    </Tbody>
    
  </Table>
</TableContainer>
    </div>
  )
}

export default Catmainpage
