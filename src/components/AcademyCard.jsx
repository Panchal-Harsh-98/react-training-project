import React from 'react';

function AcademyCard({ academyData }) {
  return (
    <div>
      <div className='cursor-pointer rounded-md border border-gray-300 bg-white'>
        <div className='p-3 pb-4 flex flex-col'>
          <div className='py-4 flex flex-col px-5'>
            {/* body */}
            <h2 className='text-xl font-semibold conte'>{academyData.name}</h2>
            <div className='flex space-x-1'>
              <p className='mt-2 text-sm font-light '>Address:</p>
              <p className='mt-2 text-sm flex-1'>{academyData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademyCard;
