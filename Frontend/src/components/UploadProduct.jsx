import React from 'react'
import { CgClose } from "react-icons/cg";

const UploadProduct = ({
  onClose
}) => {
  const [data, setData] = React.useState({
    productName: '',
   category: '',
    productImage: '',
    description: '',
    price : '',
    selling : '',
  })

  return (
    
    <div className='fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
      <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

        <div className='flex justify-between items-center pb-3'>
          <h2 className='font-bold text-lg'>Upload Product</h2>
          <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
            <CgClose />
          </div>

          

        </div>
        </div>
      </div>
      )
}

      export default UploadProduct