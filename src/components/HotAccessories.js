import React from 'react'
import HotItemCard from '../components/HotItemCard.js'
import '../styles/HotAccessories.css'

const HotAccessories = ({item,itemCover}) => {
  return (
    <div className='hotAccessories'>
        <div>
            <img src={itemCover} alt='Cover'></img>
        </div>
        <div>
            {
                item.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} image={item.image} price={item.price} index={index} />
                ))
            }
            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
        </div>
        
    </div>
  )
}

export default HotAccessories