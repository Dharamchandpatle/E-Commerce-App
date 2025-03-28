import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  // Correctly call useDispatch hook
  const dispatch = useDispatch();
  const [cartProductCount , setCartProductCount] = useState(0)

  const fechUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include"
      });

      const dataApi = await dataResponse.json();

      setCartProductCount(dataApi?.data?.count)

      // Dispatching action to Redux store if API call is successful
      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      }

      console.log("Data - user", dataResponse);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  const fetchUserAddToCart= async()=>{
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
      method : SummaryApi.addToCartProductCount.method ,
      credentials : 'include'
    })
    const dataApi = await dataResponse.json()
    console.log("dataapi ", dataApi);
    
  }


  useEffect(() => {
    // user Deatails 
    fechUserDetails();

    // user details cart produ 
    fetchUserAddToCart();
  }, []); // Adding an empty dependency array to run only once


  
  return (
    <>


      <Context.Provider value={{
        fechUserDetails , // user detail fetched
        cartProductCount ,// current user addd to art product count 
        fetchUserAddToCart 
      }}>


        <ToastContainer />


        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16 '>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
