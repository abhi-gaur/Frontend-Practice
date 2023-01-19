import React from 'react'


const MYCard = () => {
  return (
   <div className="bg-blue-100 w-full min-h-screen flex justify-center items-center ">

     <div className="w-60 p-3 bg-white rounded-xl">

        <img
        className=" object-cover rounded-xl"
        src="/Images/image-qr-code.png"
        alt=""
        />

     <div className="p-2">
          
          <h2 className="font-bold text-xm py-3 text-center">
          Improve your front-end skills by building projects
          </h2>

          <p className="text-xs text-gray-500 text-center">
          Scan the QR code to visit Frontend Mentor and to take your coding skills to next level
          </p>
            
     </div>
                  
      

     </div>
   </div>

  


  
  )
}

export default MYCard