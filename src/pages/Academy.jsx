import React, { useEffect, useState } from 'react';
import AcademyCard from '../components/AcademyCard';

function Academy() {
  const [academyData, setAcademyData] = useState([]);
  useEffect(() => {
    fetchAcademyData();
  }, []);

  const fetchAcademyData = async () => {
    let response = await fetch('http://localhost:8088/api/v1/academy/');
    let data = await response.json();
    setAcademyData(data);
    console.log(data);
  };
  return (
    <>
      <div className='mt-5 space-y-2'>
        {academyData?.map((academyItem) => {
          return <AcademyCard key={academyItem.id} academyData={academyItem} />;
        })}
      </div>
    </>
  );
}

export default Academy;
