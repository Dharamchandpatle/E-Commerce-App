import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
  const [allUser , setAllUser] = useState([])

  const fetchAllUsers = async()=>{
    const fetchData = await fetch(SummaryApi.allUser.url,{
      method:SummaryApi.allUser.method,
      credentials : 'include'
    })
    const dataResponse = await fetchData.json()

    if(dataResponse.success){
      setAllUser(dataResponse.data)
    }
    if(dataResponse.error){
      toast.error(dataResponse.message)
    }


    // console.log(dataResponse);
    
  }
  useEffect(()=>{
    fetchAllUsers()
  },[])
  return (
    <div className='flex w-full '>
     <table className='w-full userTable'>
            <thead>
                <tr className='bg-black text-white'>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
            </thead>
      <tbody >
        {
          allUser.map((el, index)=>{
            return(
              <tr>
                <td>{index+1}</td>
                <td>{el?.name}</td>
                <td>{el?.email}</td>
                <td>{el?.role}</td>
                <td>{moment(el?.createdA).format("LL")}</td>
                <td className='bg-green-100 p-2 flex justify-center items-center  rounded-full cursor-pointer hover:bg-green-600 hover:text-white'>
                <MdModeEdit/>
                </td>

                
              </tr>
            )
          })
        }
      </tbody>
     </table>

     <ChangeUserRole/>
    </div>
  )
}

export default AllUsers
