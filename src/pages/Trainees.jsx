import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import TraineeCard from '../components/TraineeCard';

function Trainees() {
  const [traineeData, setTraineeData] = useState([]);
  useEffect(() => {
    return () => {
      fetchTraineeData();
    };
  }, []);

  const fetchTraineeData = async () => {
    const response = await fetch('http://localhost:8088/api/v1/trainee');
    const jsonData = await response.json();
    setTraineeData(jsonData);
    console.log(jsonData);
  };

  return (
    <div className='mt-5 space-y-2'>
      {traineeData?.map((traineeItem) => {
        return <TraineeCard traineeData={traineeItem} />;
      })}
    </div>
  );
}

export default Trainees;
