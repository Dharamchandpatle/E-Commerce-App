import React from 'react'
import { CgClose } from "react-icons/cg";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";


const UploadProduct = ({ onClose }) => {
  const [data, setData] = React.useState({
    productName : "",
    brandName : "",
    category : "",
    productImage : [],
    description : "",
    price : "",
    sellingPrice : ""
  });

  // Handle input change
  const handleOnChange = (e) => {
    // setData({ ...data, [e.target.name]: e.target.value });
  };
const handleUploadProduct = (e) => {
    console.log(e.target.files[0])
    // const file = e.target.files[0];
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   setData({ ...data, productImage: reader.result });
    // };
    // reader.readAsDataURL(file);
  }

  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
      <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

        <div className='flex justify-between items-center pb-3'>
          <h2 className='font-bold text-lg'>Upload Product</h2>
          <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
            <CgClose />
          </div>
        </div>

        {/* Product Form */}
        <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5'>
          <label htmlFor='productName'>Product Name:</label>
          <input
            type='text'
            id='productName'
            placeholder='Enter product name'
            name='productName'
            value={data.productName}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />
          <label htmlFor='productName'>Brand Name:</label>
          <input
            type='text'
            id='productName'
            placeholder='Enter product name'
            name='productName'
            value={data.brandName}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded'
            required
          />

          <label htmlFor='category'>Category:</label>
          <select value ={data.category}
           name="" id=""
          //  onChange={handleOnChange}
           className='p-2 bg-slate-100 border rounded '
           >
            {
              productCategory.map((el,index)=>{
                return(
                  <option key={index} value={el.value} key={el.value+index} >{el.label}</option>
                )
              })
            }
           </select>

           <label htmlFor='productImage'>Product Image :</label>
           <label htmlFor='uploadImageInput'>
              <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                        <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                          <span className='text-4xl'><FaCloudUploadAlt/></span>
                          <p className='text-sm'>Upload Product Image</p>
                          <input type='file' id='uploadImageInput'  className='hidden' onChange={handleUploadProduct}/>
                        </div>
              </div>
              </label> 
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
