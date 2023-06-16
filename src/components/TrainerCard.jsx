import React from 'react';

function TrainerCard({ trainerData }) {
  return (
    <>
      <div className='cursor-pointer rounded-md border border-gray-300 bg-white'>
        <div className='p-3 pb-4 flex flex-col'>
          <div className='py-4 flex flex-col px-5'>
            {/* body */}
            <div className='flex space-x-2 items-end'>
              <h2 className='text-xl font-semibold'>{trainerData.name}</h2>
              <p className=' text-sm font-light pb-1'>
                ({trainerData.academy.name})
              </p>
            </div>
            <h4 className='mt-2 mb-1'>Courses:</h4>
            <div className='flex space-x-3 '>
              {trainerData.courses?.map((items) => {
                return (
                  <div className='bg-gray-100 px-3 py-1 rounded-lg text-sm'>
                    {items.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainerCard;
