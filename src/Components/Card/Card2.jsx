import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Card2 = () => {
  return (
    <div className="bg-[hsl(30,38%,92%)] w-full min-h-screen flex justify-center items-center ">

    <div className=" w-[15rem] bg-white flex rounded-xl object-cover ">

       <img
       className=" w-[15rem] "
       src="/Images/product.jpg"
       alt="perfume"
       />

<div className=" bg-white">

<h1 className="px-4 text-gray-500 text-xs my-2 ">
    P E R F U M E
</h1>
 
 <h2 className="font-bold text-xm py-3 text-center">
 Gabrielle Essence Eau De Parfum
 </h2>

 <p className="text-xs text-gray-500 text-center ">
 A floral,solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creater for the House of CHANEL
 </p>

 <div className='flex mx-2 my-9'>
  <h2 className=" font-bold text-[#2d624f]  my-5">$149.99</h2>
  <h5 className="line-through m-5">$169.99</h5>
 </div>


 <button className="bg-[#2d624f] flex rounded m-4 text-white font-mono px-2">
 <AiOutlineShoppingCart />
 Add To Cart
 </button>
         

</div>
           
    </div>

   
  </div>
  )
}

export default Card2