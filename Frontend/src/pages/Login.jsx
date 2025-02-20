import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [data , setData ] = useState({
    email : "",
    password : " "
  })

  const navigate = useNavigate()
  const {fechUserDetails} = useContext(Context) // user login ke bad uski detail show karneke liye hota hai 


  const handleOnchange = (e) =>{
    const {name , value } = e.target 
    
    setData((preve)=>{
    return{
      ...preve,
      [name] : value
    }
    })
  }
   const handleOnSubmit = async(e) =>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            fechUserDetails()
            // fetchUserAddToCart()
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }

    console.log("data login",data)
    
  return (
    <section id='login'>
      <div className='mx-auto container p-4'>
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} alt='login icons' />
          </div>

          <form onSubmit={handleOnSubmit} className='pt-6 flex flex-col gap-4'>
            <div className="">
              <label htmlFor="email" className="">Email: </label>

              <div className="bg-slate-100 p-2">
                <input type="email"
                 name="email" 
                 id="email"
                 placeholder='Enter your email' 
                 value={data.email}
                 onChange={handleOnchange}
                className='w-full h-full outline-none bg-transparent' />
              </div>

            </div>

            <div className="">
              <label htmlFor="password"
               className="">Password: </label>

              <div className="bg-slate-100 p-2 flex">
                <input
                type={showPassword ? "text" : "password"} 
                placeholder='enter password'
                value={data.password}
                name='password' 
                onChange={handleOnchange}
                className='w-full h-full outline-none bg-transparent'/>
            

                <div className="cursor-pointer text-x" onClick={() => setShowPassword((preve) => !preve)} >
                  <span>
                    {
                      showPassword ? <FaEyeSlash /> : <FaEye />
                    }
                  </span>
                </div>
              </div>

              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>Forgot Password ?</Link>
            </div>

            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 '>Login </button>

          </form>


          <p className="my-4 ">Don't have account ? <Link to={'/sign-up'} className='text-red-600 hover:text-red-700 hover:underline'>Sign Up </Link></p>
        </div>
      </div>
    </section>
  )
}

export default Login