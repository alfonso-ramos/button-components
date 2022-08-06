import React from 'react'
import '../style/components/Button.scss'

const Button = (props) => {
  return (
    <div className='Button'>
        <p>{props.description}</p>
        <button className={props.variant} type='button'>
            {props.text}
        </button>
    </div>
  )
}

export default Button