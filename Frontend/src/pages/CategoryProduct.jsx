import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProduct = () => {
    const params = useParams() 
  return (
    <div>
        {/* {useParams?.categoryName} */}
        product name 
    </div>
  )
}

export default CategoryProduct