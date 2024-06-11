import React from 'react'
import Sidebar from '../Components/Sidebar'
import Maincontent from '../Components/Maincontent'
function Desktop() {
  return (
    <div className='h-full w-full flex'>
      <div className='h-full w-1/4' ><Sidebar/></div>
      <div className='h-full w-3/4 bg-[#F7ECDC]'><Maincontent/></div>
    </div>
  )
}

export default Desktop