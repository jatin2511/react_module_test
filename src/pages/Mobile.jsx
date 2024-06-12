import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Maincontent from '../Components/Maincontent';

function Mobile() {
  const [sidebardisp,setsidebardisp]=useState(true);
  return (
    <div className='h-full w-full'>
      {sidebardisp?<Sidebar setsidebardisp={setsidebardisp} />:<Maincontent setsidebardisp={setsidebardisp}/>}
    </div>
  )
}

export default Mobile