import React from 'react'
import SideMenuSection from "../components/SideMenuSection"
import '../style/containers/SideMenu.scss'

const SideMenu = () => {
  return (
    <div className='SideMenu'>
        <p>
            <span className="orange-color">Dev</span>challenge.io
        </p>
        <SideMenuSection text={"Colors"} className="SideMenuSection" />
        <SideMenuSection text={"Typography"} className="SideMenuSection" />
        <SideMenuSection text={"Space"} className="SideMenuSection" />
        <SideMenuSection text={"Buttons"} className="SideMenuSection" />
        <SideMenuSection text={"Inputs"} className="SideMenuSection in-place" />
        <SideMenuSection text={"Grid"} className="SideMenuSection" />
    </div>
  )
}

export default SideMenu
