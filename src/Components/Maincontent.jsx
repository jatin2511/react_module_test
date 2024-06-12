import React from 'react'
import { useSelector } from 'react-redux'

function Maincontent() {
  const ismobile = useSelector(store => store.ismobile);
  const displaynote = useSelector(store => store.notedisplay);

  return (
    <div className='h-full w-full'>
      {displaynote.notekey? <div className='h-[9vh] bg-[#E8E8E8] w-full text-xl md:text-3xl flex items-center justify-start md:px-10'>
        {ismobile && <span className='text-3xl font-medium cursor pointer my-auto mx-2'>🡨</span>}
        <span className='md:mr-10 mr-3 rounded-full h-[7vh] w-[7vh] flex items-center justify-center' 
              style={{backgroundColor:displaynote.value.color}}>
          {displaynote.notekey.substr(0,2)}
        </span>
        <span className='h-4/5 flex items-center justify-center'>
          {displaynote.notekey}
        </span>
      </div>:<div className=''></div>}
     
    </div>
  )
}

export default Maincontent;