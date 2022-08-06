import React from 'react'
import SideMenuSection from "../components/SideMenuSection"
import '../style/components/SideMenuSection.scss'

const SideMenu = () => {
  return (
    <div className='SideMenu'>
        <p>
            <span className="orange-color">Dev</span>challenge.io
        </p>
        <SideMenuSection text={"Colors"} />
        <SideMenuSection text={"Typography"} />
        <SideMenuSection text={"Space"} />
        <SideMenuSection text={"Buttons"} />
        <SideMenuSection text={"Inputs"} />
        <SideMenuSection text={"Grid"} />
    </div>
  )
}

export default SideMenu
