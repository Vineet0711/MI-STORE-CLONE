import React from 'react'

const SliderContent = ({activeIndex,Slider,name}) => {
  return (
    <section>
      { name==="start"?Slider.map((slide,index)=>(
        <div key={index} className={index===activeIndex?'slidesAtive':'inactive'}>
          <img className='slideImages' src={slide} alt=''/>
        </div>
      )):Slider.map((slide,index)=>(
        <div key={index} className={index===activeIndex?'slidesActive':'inactive'}>
            <img className='slideImages' src={slide.image} alt='' ></img>
            <p>{slide.name}</p>
            <p>{slide.description}</p>
            <p>{slide.source} </p>
        </div>
      ))}
    </section>
  )
}

export default SliderContent