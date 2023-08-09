import React from 'react'
import NavCard from '../components/NavCard.js'

const NavItems = ({items}) => {
  return (
    <div className='navDiv'>
        {
            items.map((item,index)=>(<NavCard name={item.name} image={item.image} price={item.price} key={item.image} index={index} />))
        }
    </div>
  )
}

export default NavItems