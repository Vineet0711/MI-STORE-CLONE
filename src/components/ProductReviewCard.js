import React from 'react'
import '../styles/ProductReviewCard.css'

const ProductReviewCard = ({image, name, price,index, review}) => {
  return (
    <div className='productReviewCard'>
        <img src={image} alt={`${index} `} />
        <p>{review}</p>
        <span>{name} </span>
        <b>{price} </b>
    </div>
  )
}

export default ProductReviewCard