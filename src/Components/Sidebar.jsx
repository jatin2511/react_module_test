import React, { useEffect, useState } from 'react';
import NewNote from './NewNote';

function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Notes, setNotes] = useState({});

  useEffect(() => {
    const storedNotesString = localStorage.getItem('Notes');
    if (storedNotesString) {
      try {
        const storedNotes = JSON.parse(storedNotesString);
        setNotes(storedNotes);
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

  return (
    <div className='h-full w-full'>
      <div className='text-3xl font-semibold mx-10 py-5'>Pocket Notes</div>
      <div className='bg-black text-2xl w-max h-10 text-white mx-auto mt-5 px-6 py-1 pb-8 rounded-full font-medium' onClick={handleAddNote}>
        + Create Notes group
      </div>
      <div className='w-full'>
        {Object.keys(Notes).length > 0 ? (
          Object.entries(Notes).map(([key, note]) => (
            <div key={key} className='flex w-full my-2 p-2 border border-gray-300 rounded'>
              <div className='mr-2'>{key}:</div>
              <div style={{ backgroundColor: note.color }}>{note.color}</div>
            </div>
          ))
        ) : (
          <div className='mx-10 my-10'>No notes available</div>
        )}
      </div>
      {isModalOpen && <NewNote Notes={Notes} setIsModalOpen={setIsModalOpen} setNotes={setNotes} />}
    </div>
  );
}

export default Sidebar;