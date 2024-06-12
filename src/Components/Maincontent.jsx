import React from 'react'
import { useSelector } from 'react-redux'
import nonote from '../assets/nonote.png'
import addtonote from '../assets/addtonote.png'
function Maincontent({setsidebardisp}) {
  const ismobile = useSelector(store => store.ismobile);
  const displaynote = useSelector(store => store.notedisplay);

  const noteKey = displaynote?.notekey || '';
  const noteColor = displaynote?.value?.color || 'grey';

  return (
    <div className='h-full w-full overflow-hidden'>
      {noteKey ? (
        <div>
          <div className='h-[9vh] bg-[#E8E8E8] w-full text-xl md:text-3xl flex items-center justify-start md:px-10'>
            {ismobile && <span className='text-3xl font-medium cursor-pointer my-auto mx-2' onClick={()=>{setsidebardisp(true)}} >🡨</span>}
            <span className='md:mr-10 mr-3 rounded-full h-[7vh] w-[7vh] flex items-center justify-center'
              style={{ backgroundColor: noteColor }}>
              {noteKey.substr(0, 2)}
            </span>
            <span className='h-4/5 flex items-center justify-center'>
              {noteKey}
            </span>
          </div>
          <div className='h-[70vh] w-full'> 
               {}
          </div>
          <div className='h-[21vh] w-full bg-[#E8E8E8] flex justify-center items-center px-5 relative'>
            <textarea className=' h-[18vh] w-full resize-none rounded-lg p-3 text-xl md:text-3xl' placeholder='Enter your text here...........'>
              
            </textarea>
            <img className='cursor-pointer absolute bottom-10 right-10 md:h-7 md:w-7 h-6 w-6' src={addtonote}></img>
          </div>
        </div>

      ) : (
        <div className='h-full w-full flex flex-col items-center justify-center'>
          <div><img src={nonote}></img></div>
          <div className='text-5xl text-bold'>Pocket Notes</div>
          <div className='my-2'>Send and receive messages without keeping your phone online.</div>
          <div>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</div>
        </div>
      )}
    </div>
  )
}

export default Maincontent;