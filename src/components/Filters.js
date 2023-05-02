import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CartState } from '../context/Context';
import Rating from './Rating'
const Filters = () => {
    const [rate,setRate] = useState(3)

    const { productState,productDispatch} = CartState()
     console.log("here i am",productState)
  return (
    <div className='filters'>
        <span className='title'>
          Filter Products
        </span>
        <span> 
        <Form.Check label="Ascending" name='group1' type='radio' id={'inline-1'} />
        </span>
        <span> 
        <Form.Check label="Descending" name='group1' type='radio' id={'inline-2'} />
        </span>
        <span> 
        <Form.Check label="Include Out of stock" name='group1' type='checkbox' id={'inline-3'} />
        </span>
        <span> 
        <Form.Check label="Fast Delivery Only" name='group1' type='checkbox' id={'inline-4'} />
        </span>
         <span>
            <label style = {{ paddingRight : 10}}>Rating :</label>
            <Rating rating ={rate} onClick={(i)=>setRate(i)} style={{ cursor : "pointer"}} />
         </span>
         <Button variant='light'>Clear Filters</Button>
    </div>
  )
}

export default Filters