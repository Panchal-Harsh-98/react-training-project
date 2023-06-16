import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AcademyModal from './AcademyModal';
function Header() {
  const [buttonType, setbuttonType] = useState('');
  const [academyModalOpen, setAcademyModalOpen] = useState(false);
  const handleAcademyModalOpen = () => setAcademyModalOpen(true);
  const handleAcademyModalClose = () => {
    setAcademyModalOpen(false);
    
  };
  return (
    <div className='sticky top-0 z-50 flex items-center h-14 bg-white px-4 py-2 shadow-sm space-x-3'>
      <Link to='/trainees'>
        <button
          onClick={() => {
            setbuttonType('');
          }}
          className='hover:bg-gray-300 bg-gray-200 rounded-lg py-2 px-4'
        >
          Trainees
        </button>
      </Link>
      <Link to='/academy'>
        <button
          onClick={() => {
            setbuttonType('academy');
          }}
          className='hover:bg-gray-300 bg-gray-200 rounded-lg py-2 px-4'
        >
          Academy
        </button>
      </Link>
      <Link to='/trainers'>
        <button
          onClick={() => {
            setbuttonType('trainer');
          }}
          className='hover:bg-gray-300 bg-gray-200 rounded-lg py-2 px-4'
        >
          Trainers
        </button>
      </Link>
      <div className='flex-1'></div>
      {buttonType === 'academy' && (
        <button
          onClick={handleAcademyModalOpen}
          className='hover:bg-gray-300 bg-gray-200 rounded-lg py-2 px-4'
        >
          Add Academy
        </button>
      )}
      {/* {buttonType === 'trainer' && (
        <Link to='/trainers'>
          <button className='hover:bg-gray-300 bg-gray-200 rounded-lg py-2 px-4'>
            Add Trainer
          </button>
        </Link>
      )} */}
      <AcademyModal
        academyModalOpen={academyModalOpen}
        handleClose={handleAcademyModalClose}
      />
    </div>
  );
}

export default Header;
