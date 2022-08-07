import React from 'react'
import '../style/components/SideMenuSection.scss'

const SideMenuSection = (props) => {
  return (
    <div className='SideMenuSection'>
        <a href="/">{props.text}</a>
    </div>
  )
}

  

export default SideMenuSection
