import React, { useState } from 'react'
import Dashboard from './Dashboard'
import SideBar from './SideBar'
import {Route,Routes} from "react-router-dom"
import SearchEntity from './SearchEntity'

const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <div className='flex gap-[17px] pr-[30px] bg-[#F2F4F6]'>
        <div className="sideBar"><SideBar  open={open}/></div>
        <div className='w-full '>
          <div className="menuToggle cursor-pointer mt-[20px] mb-[32px]" onClick={handleDrawerToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 7.5C4.5 7.10218 4.65804 6.72064 4.93934 6.43934C5.22064 6.15804 5.60218 6 6 6H24C24.3978 6 24.7794 6.15804 25.0607 6.43934C25.342 6.72064 25.5 7.10218 25.5 7.5C25.5 7.89782 25.342 8.27936 25.0607 8.56066C24.7794 8.84196 24.3978 9 24 9H6C5.60218 9 5.22064 8.84196 4.93934 8.56066C4.65804 8.27936 4.5 7.89782 4.5 7.5ZM4.5 15C4.5 14.6022 4.65804 14.2206 4.93934 13.9393C5.22064 13.658 5.60218 13.5 6 13.5H15C15.3978 13.5 15.7794 13.658 16.0607 13.9393C16.342 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.342 15.7794 16.0607 16.0607C15.7794 16.342 15.3978 16.5 15 16.5H6C5.60218 16.5 5.22064 16.342 4.93934 16.0607C4.65804 15.7794 4.5 15.3978 4.5 15ZM4.5 22.5C4.5 22.1022 4.65804 21.7206 4.93934 21.4393C5.22064 21.158 5.60218 21 6 21H24C24.3978 21 24.7794 21.158 25.0607 21.4393C25.342 21.7206 25.5 22.1022 25.5 22.5C25.5 22.8978 25.342 23.2794 25.0607 23.5607C24.7794 23.842 24.3978 24 24 24H6C5.60218 24 5.22064 23.842 4.93934 23.5607C4.65804 23.2794 4.5 22.8978 4.5 22.5Z" fill="black"/>
            </svg>
          </div>
          
          <div className="contentSection">
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/entity_finder/search_entity' element={<SearchEntity />}></Route>
              {/* <Route></Route>
              <Route></Route> */}
            </Routes>
            </div>
        </div>
    </div>
  )
}

export default Layout
