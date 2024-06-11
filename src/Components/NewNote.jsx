import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function NewNote({ setIsModalOpen, setNotes, Notes }) {
  const ismobile = useSelector((store) => store);
  const [newnote, setnewnote] = useState('');
  const [selectedColor, setselectedcolor] = useState('#0047FF');

  function handlecreate() {
    if(newnote.length>1){
      const updatedNotes = { ...Notes, [newnote]: { color: selectedColor } };
    setNotes(updatedNotes);
    localStorage.setItem('Notes', JSON.stringify(updatedNotes));
    setIsModalOpen(false);
  }
  else{
    alert('Group name must contain atleast 2 characters')
  }
    
  }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-[#2F2F2FBF] flex justify-center items-center'>
      <div className={`bg-white ${ismobile ? 'w-[90vw] text-lg' : 'w-[30vw] text-2xl'} p-3 rounded-md font-normal`}>
        <div className='m-2'>Create New Notes group</div>
        <div className='flex m-4 justify-between'>
          <div>Group Name</div>
          <input
            className='border-2 w-3/5 rounded-xl px-5 text-lg'
            placeholder='Enter your group name....'
            value={newnote}
            onChange={(e) => { setnewnote(e.target.value); }}
          />
        </div>
        <div className='mx-4 flex items-center justify-between'>
          <div className='w-2/5'>Choose color</div>
          {['#0047FF', '#43E6FC', '#6691FF', '#B38BFA', '#F19576', '#FF79F2'].map((col) => (
            <button
              className={`h-6 w-6 rounded-full ${selectedColor === col ? 'border-2 border-black' : ''}`}
              style={{ backgroundColor: col }}
              key={col}
              onClick={() => setselectedcolor(col)}
            />
          ))}
        </div>
        <div className='flex justify-end m-4'>
          <button className='bg-black text-white text-xl font-normal w-28 rounded-xl justify-center items-center' onClick={handlecreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewNote;