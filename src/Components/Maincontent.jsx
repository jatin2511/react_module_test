import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import nonote from '../assets/nonote.png'
import addtonote from '../assets/addtonote.png'
import initializer from '../actions/Noteaction'

function Maincontent({ setsidebardisp }) {
  const dispatch = useDispatch();
  const ismobile = useSelector(store => store.ismobile);
  const displaynote = useSelector(store => store.notedisplay);
  const Notes = useSelector(store => store.Notes);
  const [newnote, setnewnote] = useState('');
  const noteKey = displaynote?.notekey || '';
  const noteColor = displaynote?.value?.color || 'grey';
  const content = displaynote?.value?.content || [];

  function handlenewnote() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    let hour = now.getHours();
    const minute = now.getMinutes();
    let ampm = 'AM';
    if(hour>=12){
      hour-=12;
      ampm='PM';
    }
    const abc = {
      date: day + '/' + month + '/' + year,
      time: hour + ':' + minute + ' ' + ampm,
      content: newnote
    };
    content.push(abc);
    const updatednotes = { ...Notes, [noteKey]: { ...Notes[noteKey], content: content } };
    dispatch(initializer(updatednotes));
    localStorage.setItem('Notes', JSON.stringify(updatednotes));
    setnewnote('');
  }

  return (
    <div className='h-full w-full overflow-hidden'>
      {noteKey ? (
        <div>
          <div className='h-[9vh] bg-[#E8E8E8] w-full text-xl md:text-3xl flex items-center justify-start md:px-10'>
            {ismobile && <span className='text-3xl font-medium cursor-pointer my-auto mx-2' onClick={() => { setsidebardisp(true) }}>🡨</span>}
            <span className='md:mr-10 mr-3 rounded-full h-[7vh] w-[7vh] flex items-center justify-center'
              style={{ backgroundColor: noteColor }}>
              {noteKey.substr(0, 2)}
            </span>
            <span className='h-4/5 flex items-center justify-center'>
              {noteKey}
            </span>
          </div>
          <div className='h-[70vh] w-full p-[4vh] overflow-y-auto scrollbar-hide bg-[#F7ECDC]'>
            {content.map((para, index) => (
              <div key={index} className='my-5 flex'>
                <div className=''>
                  <p>{para.time}</p>
                  <p>{para.date}</p>
                </div>
                <div className='whitespace-normal break-words max-w-[calc(100%-5rem)] pl-8 '>{para.content}</div>
              </div>
            ))}
          </div>
          <div className='h-[21vh] w-full bg-[#E8E8E8] flex justify-center items-center px-5 relative'>
            <textarea value={newnote} onChange={(e) => { setnewnote(e.target.value) }} className='h-[18vh] w-full resize-none rounded-lg p-3 text-xl md:text-3xl' placeholder='Enter your text here...........'>
            </textarea>
            <img className='cursor-pointer absolute bottom-10 right-10 md:h-7 md:w-7 h-6 w-6' src={addtonote} onClick={handlenewnote} alt="Add Note"></img>
          </div>
        </div>
      ) : (
        <div className='h-full w-full flex flex-col items-center justify-center'>
          <div><img src={nonote} alt="No note selected" /></div>
          <div className='text-5xl font-bold'>Pocket Notes</div>
          <div className='my-2'>Send and receive messages without keeping your phone online.</div>
          <div>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</div>
        </div>
      )}
    </div>
  )
}

export default Maincontent;