import React from 'react'
import { useSelector } from 'react-redux'

function Maincontent() {
  const displaynote=useSelector(store=>store.notedisplay)
  return (
    <div className='h-full w-full'>{displaynote.notekey}</div>
  )
}

export default Maincontent