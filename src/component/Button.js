import React from 'react'

const Button = ({img}) => {
  return (
    <div className='select-button'>
      <img src={img} alt='선택'/>
    </div>
  )
}

export default Button