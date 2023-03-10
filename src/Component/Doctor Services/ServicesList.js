import React, { useState } from 'react'
import {Box,TableContainer,Table,TableCell,TableRow,TableHead,TextField, TableBody,Button,Checkbox} from '@mui/material'
import { useForm } from 'react-hook-form'

// Pathology
export function DoctorName1() {
  
  const Services=[
    {id: 1,Lable:'Urine Test',Charges:400},
    {id: 2,Lable:'Blood Test',Charges:550},
    {id: 3,Lable:'Saliva Tests',Charges:350},
]

const [test, setTest] = useState([])

const handleServices=()=>{
console.log([...test])
}

const label =  { inputProps: { 'aria-label': 'Checkbox demo' } }
  return (
    <>
      <div className='border-2 border-gray-600 rounded '>
        <Box className='m-3'>
<h1 className='text-xl font-semibold text-center text-gray-500 underline'>Pathology</h1>
<div className='flex gap-8 mt-6 text-gray-500'>
  <h1>Doctor Name:<span className='text-gray-700'> R.K.Patil</span></h1>
  <h1>Service Name:<span className='text-gray-700'> Pathology</span></h1>
</div>
<div className='mt-3'>
<form >
    <div>
    <TableContainer>
    <Table >
    <TableHead>
                  <TableRow>
                      <TableCell align='center'>Test Done</TableCell>
                      <TableCell align='center'>Test Name</TableCell>
                      <TableCell align='center'>Charges</TableCell>
                  </TableRow>
              </TableHead>
              {
         Services.map((Service,index)=>(
          <>
          <TableBody>
          <TableRow key={index}>
          <TableCell align='center'>
              {/* <CheckBox/> */}
              <Checkbox 
              onChange={(e) => {
                if (e.target.checked) {
                  setTest([
                    ...test,{
          id: Service.id,
          Lable: Service.Lable,
          Charges: Service.Charges,
        },
                  ])
                } else {
                  // remove from list
                  setTest(
                    test.filter((tests) => tests.id !== Service.id),
                  );
                }
              }}
              value={test}
             />
              </TableCell>
              <TableCell align='center'>{Service.Lable}</TableCell>
              <TableCell align='center'>{Service.Charges}</TableCell> 
          </TableRow>
          </TableBody>
          </>
         )) 
      }
      <TableCell>
        <div >
        <Button variant="contained" color="success" className='relative lg:left-36 left-24' 
        onClick={()=>handleServices(setTest)}
        >Save</Button>
        </div>
        
      </TableCell>
    </Table>

</TableContainer> 
    </div>
 
  </form>
</div>
        </Box>
       
      </div>
    </>
  )
}

// Radiology
export function DoctorName2(){
  const Services=[
    {id: 1,Lable:'X-ray',Charges:850},
    {id: 2,Lable:'Ultra-Sound',Charges:1000},
    {id: 3,Lable:'MRI',Charges:3500},
]

const [test, setTest] = useState([])

const handleServices=()=>{
console.log([...test])
}

const label =  { inputProps: { 'aria-label': 'Checkbox demo' } }
  return (
    <>
    <div className='border-2 border-gray-600 rounded mt-4 lg:mt-0'>
        <Box className='m-3'>
<h1 className='text-xl font-semibold text-center text-gray-500 underline'>Radiology</h1>
<div className='flex gap-8 mt-6 text-gray-500'>
  <h1>Doctor Name:<span className='text-gray-700'> Riya Joshi</span></h1>
  <h1>Service Name:<span className='text-gray-700'> Radiology</span></h1>
</div>
<div className='mt-3'>
<form >
    <div>
    <TableContainer>
    <Table >
    <TableHead>
                  <TableRow>
                      <TableCell align='center'>Test Done</TableCell>
                      <TableCell align='center'>Test Name</TableCell>
                      <TableCell align='center'>Charges</TableCell>
                  </TableRow>
              </TableHead>
              {
         Services.map((Service,index)=>(
          <>
          <TableBody>
          <TableRow key={index}>
          <TableCell align='center'>
              {/* <CheckBox/> */}
              <Checkbox 
              onChange={(e) => {
                if (e.target.checked) {
                  setTest([
                    ...test,{
          id: Service.id,
          Lable: Service.Lable,
          Charges: Service.Charges,
        },
                  ])
                } else {
                  // remove from list
                  setTest(
                    test.filter((tests) => tests.id !== Service.id),
                  );
                }
              }}
              value={test}
             />
              </TableCell>
              <TableCell align='center'>
{Service.Lable}
              </TableCell>
              <TableCell align='center'>
       
        {Service.Charges}
              </TableCell>
            
            
          </TableRow>
          </TableBody>
          </>
         )) 
      }
      <TableCell>
        <div >
        <Button variant="contained" color="success" className='relative lg:left-36 left-24' 
         onClick={()=>handleServices(setTest)}>Save</Button>
        </div>
        
      </TableCell>
    </Table>

</TableContainer> 
    </div>
 
  </form>
</div>
        </Box>
       
      </div>
    </>
  )
}

// Neurology
export function DoctorName3( ){
  const Services=[
    {id: 1,Lable:'CT Scan',Charges:850},
    {id: 2,Lable:'Dental Imaging',Charges:1000},
    {id: 3,Lable:'CT Myelogram',Charges:3500},
  ]

const [test, setTest] = useState([])

const handleServices=()=>{
console.log([...test])
}

const label =  { inputProps: { 'aria-label': 'Checkbox demo' } }
  return (
    <>
    <div className='border-2 border-gray-600 rounded mt-4 lg:mt-0'>
        <Box className='m-3'>
<h1 className='text-xl font-semibold text-center text-gray-500 underline'>Neurology</h1>
<div className='flex gap-8 mt-6 text-gray-500'>
  <h1>Doctor Name:<span className='text-gray-700'> Arihant Kumar</span></h1>
  <h1>Service Name:<span className='text-gray-700'> Neurology</span></h1>
</div>
<div className='mt-3'>
<form >
    <div>
    <TableContainer>
    <Table >
    <TableHead>
                  <TableRow>
                      <TableCell align='center'>Test Done</TableCell>
                      <TableCell align='center'>Test Name</TableCell>
                      <TableCell align='center'>Charges</TableCell>
                  </TableRow>
              </TableHead>
              {
         Services.map((Service,index)=>(
          <>
          <TableBody>
          <TableRow key={index}>
          <TableCell align='center'>
              {/* <CheckBox/> */}
              <Checkbox 
              onChange={(e) => {
                if (e.target.checked) {
                  setTest([
                    ...test,{
          id: Service.id,
          Lable: Service.Lable,
          Charges: Service.Charges,
        },
                  ])
                } else {
                  // remove from list
                  setTest(
                    test.filter((tests) => tests.id !== Service.id),
                  );
                }
              }}
              value={test}
             />
              </TableCell>
              <TableCell align='center'>
{Service.Lable}
              </TableCell>
              <TableCell align='center'>
       
        {Service.Charges}
              </TableCell>
            
            
          </TableRow>
          </TableBody>
          </>
         )) 
      }
      <TableCell>
        <div >
        <Button variant="contained" color="success" className='relative lg:left-36 left-24' 
         onClick={()=>handleServices(setTest)}>Save</Button>
        </div>
        
      </TableCell>
    </Table>

</TableContainer> 
    </div>
 
  </form>
</div>
        </Box>
       
      </div>
    </>
  )
}
