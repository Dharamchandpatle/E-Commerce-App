import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common';

const SearchProduct = () => {
    const query = useLocation()  
    // console.log("query " , query.search);
    const [data , setData ]=useState([])
    const [loading , setLoading ] = useState(true)

    const fetchProduct = async()=>{
        setLoading(true)
        const response = await fetch(SummaryApi.searchProduct.url+query.search)
        const dataResponse = await response.json()
        // setLoading(false)

        setData(dataResponse.data)
    } 

    useEffect(()=>{
        fetchProduct();
    },[query])
    
  return (
    <div>
        {
            loading && (
         <p>loading ....</p>
            )
        }
    </div>
  )
}

export default SearchProduct