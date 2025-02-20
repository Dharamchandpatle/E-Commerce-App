import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobsase64';
import SummaryApi from '../common';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: " ",
        name: "",
        confirmPassword: "",
        profilePic: " "
    })
    const navigate = useNavigate()

    const handleOnchange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleUploadPic = async (e) => {
        const file = e.target.files[0]

        const imagePic = await imageTobase64(file)

        setData((preve) => {
            return {
                ...preve,
                
                profilePic: imagePic
            }
        })

    }


    const handleOnSubmit = async (e) => {
        e.preventDefault()

        if (data.password === data.confirmPassword) {
            const dataResponse = await fetch(SummaryApi.signUp.url, {
                method: SummaryApi.signUp.method,
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                },
                body: JSON.stringify(data)
            })
            const dataApi = await dataResponse.json()

            if (dataApi.success) {
                toast.success(dataApi.message)
                navigate('/login')
            }
            if (dataApi.error) {
                toast.error(dataApi.message)
            }
            // console.log("data", dataApi)


        } else {
            toast.error("Password and Confirm Password are not same")
        }

    }

    // console.log("data login ", data);

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className="bg-white p-5 w-full max-w-sm mx-auto">
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt='login icons' />
                        </div>
                        <form>
                            <label>
                                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                                    Upload  Photo
                                </div>
                                <input type='file' className='hidden' onChange={handleUploadPic} />
                            </label>
                        </form>
                    </div>


                    <form onSubmit={handleOnSubmit} className='pt-6 flex flex-col gap-4'>
                        <div className="grid ">
                            <label htmlFor="text" className="">Name: </label>

                            <div className="bg-slate-100 p-2">
                                <input type="text"
                                    name="name"
                                    id="text"
                                    placeholder='Enter your Name'
                                    required
                                    value={data.name}
                                    onChange={handleOnchange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>

                        </div>

                        <div className="grid ">
                            <label htmlFor="email" className="">Email: </label>

                            <div className="bg-slate-100 p-2">
                                <input type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Enter your email'
                                    value={data.email}
                                    required
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
                                    required
                                    className='w-full h-full outline-none bg-transparent' />


                                <div className="cursor-pointer text-x" onClick={() => setShowPassword((preve) => !preve)} >
                                    <span>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div className="">
                            <label htmlFor="password"
                                className=""> confirm Password: </label>

                            <div className="bg-slate-100 p-2 flex">
                                <input
                                    type={confirmPassword ? "text" : "password"}
                                    placeholder='enter confirm password'
                                    value={data.confirmPassword}
                                    name='confirmPassword'
                                    onChange={handleOnchange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />


                                <div className="cursor-pointer text-x" onClick={() => setShowConfirmPassword((preve) => !preve)} >
                                    <span>
                                        {
                                            confirmPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>
                            </div>

                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 '>Sign up </button>

                    </form>


                    <p className="my-4 ">already have account ? <Link to={'/login'} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp