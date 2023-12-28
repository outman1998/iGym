import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import billed from '../assets/images/fitness.png';
import SendIcon from '@mui/icons-material/Send';
import { useCtx } from '../context/Context';

export default function Stats() {

  const {handleOpen} = useCtx();

  return (
    <div className='bg-white m-auto containerr'>

      <p
      className='pt-20 text-3xl lg:text-4xl text-black text-center font-semibold'
      >
        Discover a World of Fitness Possibilities      
      </p>

      <p
      className='text-[#7f7f85]  text-[18px] text-center lg:w-1/2 m-auto mb-10 mt-2'

      >
        Welcome to our gym club, your personalized fitness companion. We're here to guide you on your journey to a healthier, fitter lifestyle
      </p>

      <Box
      className="flexen sm:block md:flex justify-center px-[100px]"
      >
        <Box className='et boxen'
        sx={{
          width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
          margin: 'auto',
          textAlign: 'center',
          padding: '30px 0px',
          border: '2px solid black',
          borderBottom: {xs: 'none', sm: 'none', md: '2px solid black', lg: '2px solid black'},
          borderRight: {xs: '2px solid black', sm: '2px solid black', md: 'none', lg: 'none'},
          color: 'black'

        }}
        >
          <Typography
          sx={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '4px',
            WebkitTextStrokeColor: '#FF2625'
          }}
          >
            3
          </Typography>
          <Typography color="#7f7f85">YEARS OF EXPERIENCE</Typography>
        </Box>

        <Box className='to boxen'
        sx={{
          width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
          margin: 'auto',
          textAlign: 'center',
          padding: '30px 0px',
          border: '2px solid black',
          borderBottom: {xs: 'none', sm: 'none', md: '2px solid black', lg: '2px solid black'},
          borderRight: {xs: '2px solid black', sm: '2px solid black', md: 'none', lg: 'none'}

        }}
        >
          <Typography
            sx={{
              WebkitTextFillColor: 'transparent',
              WebkitTextStrokeWidth: '4px',
              WebkitTextStrokeColor: '#FF2625'
            }}
          >
            5
          </Typography>
          <Typography color="#7f7f85">SKILLED TRAINERS</Typography>
        </Box>

        <Box className='tre boxen'
        sx={{
          width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
          margin: 'auto',
          textAlign: 'center',
          padding: '30px 0px',
          border: '2px solid black',
          borderBottom: {xs: 'none', sm: 'none', md: '2px solid black', lg: '2px solid black'},
          borderRight: {xs: '2px solid black', sm: '2px solid black', md: 'none', lg: 'none'}
        }}
        >
          <Typography
          sx={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '4px',
            WebkitTextStrokeColor: '#FF2625'
          }}
          >
            43K
          </Typography>
          <Typography color="#7f7f85">CALORIES BURNED</Typography>
        </Box>

        <Box className='fire boxen'
        sx={{
          width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
          margin: 'auto',
          textAlign: 'center',
          padding: '30px 0px',
          border: '2px solid black'
        }}
        >
          <Typography
          sx={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '4px',
            WebkitTextStrokeColor: '#FF2625'
          }}
          >
            88
          </Typography>
          <Typography color="#7f7f85">HAPPY MEMBERS</Typography>
        </Box>
      </Box>

    </div>

  )
}
