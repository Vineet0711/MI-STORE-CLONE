import React from 'react'
import '../styles/Navbar.css'

const NavCard = ({name,image, index,price}) => {
  return (
    <div className='navCard'>
        <img src={image} alt={`${index} "item"`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard