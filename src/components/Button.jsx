import React from 'react'

const Button = (variant) => {
  return (
    <div className='Button'>
        <button className={variant} type='button'>
            Default
        </button>
    </div>
  )
}

export default Button