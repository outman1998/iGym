import { Box, Typography } from '@mui/material';
import React from 'react';
import woman from '../assets/images/cardio.webp';

const AboutUs = () => {
  return (
    <div
    className='parent containerr bg-white pt-20 pb-[100px]'
    >
        <div
        className='sm:block md:flex justify-center items-center py-[80px]' 
        >

            <div 
            className='mr-[40px] md:w-1/2'
            >
                <p 
                className='text-black'
                >
                    Learn More About Us
                </p>
                <p
                className='text-[30px] text-black'
                >
                    Your Fitness, Your Way
                </p>
                <p
                className='text-[#7f7f85] text-lg'
                >
            Embark on a transformative fitness journey with iGym. Whether you're looking to build strength, improve flexibility, or simply enhance your overall well-being, we're here to guide and support you every step of the way. Become member for free and make fitness a sustainable and enjoyable part of your daily life. Your health and happiness are just a click away!
                </p>
            </div>

            <div className='w-full md:w-1/2 pt-6 md:pt-0'
            >
                <img 
                width="100%"
                src={woman}
                alt='woman'
                style={{
                    borderRadius: '10px 55px 10px 55px',
                }}
                />
            </div>

        </div>
    </div>
  )
}

export default AboutUs