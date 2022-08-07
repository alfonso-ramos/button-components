import React from 'react'
import '../style/containers/Layout.css'

const Layout = ({children}) => {
  return (
    <div className='Layout'>
        {children}
    </div>
  )
}
<style>
  .Layout{

  }
</style>
export default Layout