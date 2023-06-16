import React, { useState, useEffect } from 'react';
import TrainerCard from '../components/TrainerCard';

function Trainers() {
  const [trainerData, setTrainerData] = useState([]);

  useEffect(() => {
    fetchTrainerData();
  }, []);

  const fetchTrainerData = async () => {
    let response = await fetch('http://localhost:8088/api/v1/trainer');
    let data = await response.json();
    setTrainerData(data);
    console.log(data);
  };

  return (
    <>
      <div className='mt-5 space-y-2'>
        {trainerData?.map((trainerItem) => {
          return <TrainerCard trainerData={trainerItem} key={trainerItem.id} />;
        })}
      </div>
    </>
  );
}

export default Trainers;
