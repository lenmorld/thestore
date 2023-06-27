import React, { useState } from 'react'

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import "./Slider.scss"

const data = [
  'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1600'
]

export const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  const lastIndex = data.length - 1

  const prevSlide = () => {
    // if -1 go to last index
    setCurrentSlide(_currentSlide => 
      (_currentSlide <= 0 ? lastIndex : _currentSlide - 1)
    )
  }

  const nextSlide = () => {
    // if last index go to 0
    setCurrentSlide(_currentSlide =>  (currentSlide >= lastIndex ? 0 : _currentSlide + 1) )
  }

  console.log(currentSlide)

  const transformStyle = {
    transform: `translateX(-${currentSlide * 100}vw)`
  }

  return (
    <div className='slider'>
      <div className="container" style={transformStyle}>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <KeyboardArrowLeftOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <KeyboardArrowRightOutlinedIcon />
        </div>
      </div>
    </div>
  )
}
