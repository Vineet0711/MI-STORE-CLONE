import React from 'react'

const Dot = ({activeIndex, onClick, Slider}) => {
  return (
    <div className='allDots'>
        {Slider.map((slide,index)=><span key={index} 
        className={`${activeIndex===index?'dot activeDot':'dot'}`}
        onClick={()=>onClick(index)}></span>)}
    </div>
  )
}

export default Dot