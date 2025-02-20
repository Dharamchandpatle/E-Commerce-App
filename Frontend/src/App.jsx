import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  // Correctly call useDispatch hook
  const dispatch = useDispatch();

  const fechUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include"
      });

      const dataApi = await dataResponse.json();

      // Dispatching action to Redux store if API call is successful
      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      }

      console.log("Data - user", dataResponse);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    fechUserDetails();
  }, []); // Adding an empty dependency array to run only once

  return (
    <>
      <Context.Provider value={{
        fechUserDetails // user detail fetched 
      }}>
        <ToastContainer />
        <Header />
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
