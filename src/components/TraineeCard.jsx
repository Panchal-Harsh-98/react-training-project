import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TraineeCard({ traineeData }) {
  let navigate = useNavigate();

  return (
    <>
      <div className='cursor-pointer rounded-md border border-gray-300 bg-white'>
        <div className='flex'>
          <div className='p-3 flex flex-col flex-1'>
            <div className='py-4 flex flex-col px-5'>
              {/* body */}
              <h2 className='text-xl font-semibold conte'>
                {traineeData.name}
              </h2>
              <p className='mt-2 text-sm font-light'>
                Stream : {traineeData.stream.name}
              </p>
              <p className='mt-2 text-sm font-light'>
                Academy : {traineeData.academy.name}
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center p-3 pl-0'>
            <Link to={`result/${traineeData.id}`}>
              <button className='hover:bg-gray-300 bg-gray-200 rounded-lg py-2 px-4'>
                Show Result
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TraineeCard;
