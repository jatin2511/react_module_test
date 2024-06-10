import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import setview from '../actions/Ismobileaction';

function Sidebar() {
  const ismobile=useSelector(store=>store);
  const dispatch=useDispatch();
  return (
  <div className='h-full bg-white' >

  </div>
  )
}

export default Sidebar