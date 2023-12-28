import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function Footer() {


  return (
    <>
      <div className='md:flex justify-center md:justify-between items-center py-5 px-12 border-t'
      >

        <p
        className='text-[13px] text-center mb-2 md:mb-0'
        >
          Copyright © 2023 iGym.com. All rights reserved
        </p>

        <div 
        className='flex justify-center items-center'
        >
          <p
          className='mr-5 text-[13px]'
          >
            About
          </p>
          <p
          className='mr-5 text-[13px]'
          >
            Cookie Preferences
          </p>
          <p
          className='text-[13px]'
          >
            Membership
          </p>
        </div>

      </div>
    </>

  );
}