import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import './styles.css'
const Home = () => {

   const {state : {products}} =  CartState()
   console.log(products);
  return (
    <div className='home'> 
    {/* <Filter /> left component */}
    <div className='productContainer'>
        {
            products.map((prod)=>{
             return (
                <SingleProduct prod={prod} key={prod.id}></SingleProduct>
             )
            })
        }
    </div>
    </div>
  )
}

export default Home