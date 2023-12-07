import React from 'react'
import Dashboard from './Dashboard'
import SideBar from './SideBar'

const Layout = () => {
  return (
    <div className='d-flex'>
        <div className="sideBar"><SideBar /></div>
        {/* <div className="contentSection"><Dashboard/></div> */}
    </div>
  )
}

export default Layout
