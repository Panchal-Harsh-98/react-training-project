import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';
function AcademyModal({ academyModalOpen, handleClose }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: ,
    borderRadius: '0.5rem',
    boxShadow: 24,
    p: 4,
  };
  const [name, setName] = useState('');
  const [address, setaddress] = useState('');
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  let postData = async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      body: data, // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    name === '' && setNameError(true);
    address === '' && setAddressError(true);
    let formdata = { name: name, address: address };
    if (!nameError && !addressError) {
      console.log(JSON.stringify(formdata));
      axios
        .post(
          'http://localhost:8088/api/v1/academy/',
          JSON.stringify(formdata),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then((res) => {
          handleClose();
        })
        .catch((error) => {
          alert('An academy already exists in that location!!');
          console.log(error);
        });
    }
  };

  return (
    <Modal open={academyModalOpen} aria-labelledby='Add Academy'>
      <Box sx={{ ...style }}>
        <h1 className='text-2xl'>Add Academy</h1>
        <form
          className='flex flex-col space-y-2 my-4'
          onSubmit={handleOnSubmit}
        >
          <div className='flex flex-col space-y-1'>
            <p className='text-md font-light'>Name</p>
            <input
              type='text'
              name='academyName'
              value={name}
              onChange={(event) => {
                setNameError(false);
                setName(event.target.value);
              }}
              id='academyName'
              className='rounded-lg border p-1 border-gray-400'
            />
            {nameError && (
              <p className='text-xs text-red-600'>Please Enter Academy Name</p>
            )}
          </div>
          <div className='flex flex-col space-y-1'>
            <p className='text-md font-light'>Address</p>

            <input
              type='text'
              name='academyAddress'
              id='academyAddress'
              value={address}
              onChange={(event) => {
                setAddressError(false);
                setaddress(event.target.value);
              }}
              className='rounded-lg border p-1 border-gray-400'
            />
            {addressError && (
              <p className='text-xs text-red-600'>
                Please Enter Academy Address
              </p>
            )}
          </div>

          <div className='flex space-x-2 pt-4'>
            <div className='flex-1'></div>
            <button
              onClick={() => {
                handleClose();
                setaddress('');
                setName('');
              }}
              className='hover:bg-red-600 hover:text-white bg-gray-200 rounded-lg py-2 px-4'
            >
              Cancel
            </button>
            <input
              className='hover:bg-gray-400  bg-gray-200 rounded-lg py-2 px-4'
              type='submit'
              value='submit'
            />
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default AcademyModal;
