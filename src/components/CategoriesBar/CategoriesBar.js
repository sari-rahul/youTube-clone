import React from 'react';
import './_categoriesbar.scss'; 
import { useState } from 'react';

const keywords = [
  'All',
  'React JS',
  'Angular JS',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Malayalam Songs',
  'Coding',
  'Football',
  'Travel',
  'Pearle Maanney',
]

const CategoriesBar = () => {

  const [activeElement, setActiveElement]= useState('All')
  const handleClick = value=>{
    setActiveElement(value)
  }

  return (
    <div className='categoriesBar'>
      {
       keywords.map((value,i)=>(
        <span key={i}
          onClick={()=>handleClick(value)}
          className={activeElement=== value? 'active':''}>
            {value}
          </span>
       ))
      }
    </div>
  )
}

export default CategoriesBar
