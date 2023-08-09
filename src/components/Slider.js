import React,{useState} from 'react'
import '../styles/Slider.css';
import SliderContent from './SliderContent';
import Arrow from './Arrow'
import Dot from './Dot'


export default function Slider({item,name}){
  const len = item.length-1;
  const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='sliderContainer'>
     
      <SliderContent activeIndex={activeIndex} Slider={item} name={name}></SliderContent>
      <Arrow prevSlide={()=>
        setActiveIndex(activeIndex<1?len:activeIndex-1)}
            nextSlide={()=>
        setActiveIndex(activeIndex===len?0:activeIndex+1)}
        ></Arrow>
      <Dot activeIndex={activeIndex} onClick={(activeIndex)=>setActiveIndex(activeIndex)} Slider={item}></Dot>
    </div>
  )
}


 