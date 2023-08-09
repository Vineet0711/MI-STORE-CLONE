import React from 'react'

const Arrow = ({prevSlide,nextSlide}) => {
  return (
    <div className='arrows'>
        <span className='prev' onClick={prevSlide}>
            &lt;
        </span>
        <span className='next' onClick={nextSlide}>
            &gt;
        </span>
    </div>
  )
}

export default Arrow