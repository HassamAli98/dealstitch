import React from 'react'
import Button from '@mui/material/Button';

const Dashboard = () => {
  return (
    <div>
        <div className="button py-[24px]">
         <Button variant="contained" className='flex gap-2'><span>+</span><span>New Task</span></Button>
        </div>
      
    </div>
  )
}

export default Dashboard
