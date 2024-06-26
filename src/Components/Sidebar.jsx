import React, { useEffect, useState } from 'react';
import NewNote from './NewNote';
import displaynote from '../actions/notes';
import { useDispatch, useSelector } from 'react-redux';
import  initialize from '../actions/Noteaction'

function Sidebar({setsidebardisp}) {
  const [keyclicked,setkeyclicked]=useState('');
  const Notes=useSelector(store=>store.Notes)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedNotesString = localStorage.getItem('Notes');
    if (storedNotesString) {
      try {
        const storedNotes = JSON.parse(storedNotesString);
        dispatch(initialize(storedNotes));
      } catch (error) {
        console.error('Error parsing stored notes:', error);
      }
    } else {
      localStorage.setItem('Notes', JSON.stringify(Notes));
    }
  }, []);

  const handleAddNote = () => {
    setIsModalOpen(true);
  };
  const handledisplaynote = (key) => {
    const notetodisplay = {
      notekey: key,
      value: Notes[key]
    }
    setkeyclicked(key);
    dispatch(displaynote(notetodisplay))
    setsidebardisp(false);
  }
  return (
    <div className='h-full w-full overflow-hidden'>
      <div className='text-3xl md:font-semibold mx-10 py-5 font-[450]'>Pocket Notes</div>
      <div className='bg-black md:text-2xl text-xl w-max h-10 text-white mx-auto md:mt-5 px-6 py-1 rounded-full font-medium cursor-pointer' onClick={handleAddNote}>
        + Create Notes group
      </div>
      <div className='w-full md:py-10 py-5'>
        {Object.keys(Notes).length > 0 ? (
          Object.entries(Notes).map(([key, note]) => (
            <div key={key} className={`flex w-full p-2 ml-5 items-center  ${keyclicked===key?'bg-[#F7ECDC]':''} rounded-l-3xl cursor-pointer`} onClick={() => { handledisplaynote(key)}}>
              <div className='mr-2 h-10 w-10 rounded-[50%] flex justify-center items-center text-2xl text-white font-medium md:h-14 md:w-14 md:text-3xl' style={{ backgroundColor: note.color }}>{key.substr(0, 2)}</div>
              <div className='text-2xl md:text-3xl font-normal'>{key}</div>
            </div>
          ))
        ) : (
          <div className='mx-10 my-10'>No notes available</div>
        )}
      </div>
      {isModalOpen && <NewNote setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default Sidebar;