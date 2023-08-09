import React from 'react'
import ProductReviewCard from '../components/ProductReviewCard.js'
import '../styles/ProductReview.css'

const ProductReview = ({items}) => {
  return (
    <div className='productReview'>
        {
            items.map((item,index)=>(
                <ProductReviewCard key={index} image={item.image} index={index} name={item.name} price={item.price} review={item.review}  />
            ))
        }
    </div>
  )
}

export default ProductReview