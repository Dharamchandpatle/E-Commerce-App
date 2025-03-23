import React, { useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import SummaryApi from '../common';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false)

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })
    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null));
    }
    if (data.error) {
      toast.error(data.message)
    }
  }

  return (
    <div>
      <header className="h-16 shadow-md bg-white">
        <div className="h-full container mx-auto flex items-center px-12 justify-between">
          <div>
            <Link to={"/"} >
              <h1 className="font-bold">Dharam's web</h1>
            </Link>
          </div>
          <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
            <input type='text' placeholder='search product here...' className='w-full outline-none' />
            <div className='text-lg min-w-[3rem] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
              <GrSearch />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative flex justify-center">
              {user?._id && (
                <div
                  className="text-3xl cursor-pointer relative flex justify-center"
                  onClick={() => setMenuDisplay(prev => !prev)}
                >
                  {user?.profilePic ? (
                    <img src={user?.profilePic} alt="profile" className="w-10 h-10 rounded-full" />
                  ) : (
                    <FaRegCircleUser />
                  )}
                </div>
              )}

              {menuDisplay && (
                <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                  <nav>
                    {user?.role === ROLE.ADMIN && (
                      <Link
                        to={"/admin-panel/all-products"}
                        className="whitespace-nowrap hover:bg-slate-100 p-2 block"
                        onClick={() => setMenuDisplay(false)} // Admin Panel select hone par menu close ho jayega
                      >
                        Admin Panel
                      </Link>
                    )}
                  </nav>
                </div>
              )}
            </div>

            <div className="text-2xl relative">
              <span><FaShoppingCart /></span>
              <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>0</p>
              </div>
            </div>

            <div>
              {user?._id ? (
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded-full text-center text-white bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-3 py-1 rounded-full text-center text-white bg-red-600 hover:bg-red-700"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
