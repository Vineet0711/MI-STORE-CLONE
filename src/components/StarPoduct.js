import React from 'react'
import '../styles/starProduct.css'

const StarPoduct = ({products}) => {
  return (
    <div className='starProduct'>
        <div>
            <a href={products[0].url}><img src={products[0].image} alt="Star Product"></img></a>
        </div>
        <div>
            <a href={products[0].url}><img src={products[1].image} alt="Star Product"></img></a>
            <a href={products[0].url}><img src={products[2].image} alt="Star Product"></img></a>
            <a href={products[0].url}><img src={products[3].image} alt="Star Product"></img></a>
        </div>
    </div>
  )
}

export default StarPoduct