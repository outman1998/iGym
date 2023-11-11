import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
import SendIcon from '@mui/icons-material/Send';

export default function HeroBanner() {
  return (
    <Box
    sx={{
      mt: {lg: '100px', xs: '70px'},
      ml: {sm: '50px'}
    }}
    position="relative"
    p="20px"
    >
      <Typography
      color="#FF2625"
      fontWeight="600"
      fontSize="26px"
      >
        A world full of exercises
      </Typography>

      <Typography
      fontWeight={700}
      sx={{
        fontSize: {lg: '64px', xs: '40px'},
        width: {lg: '50%'}
      }}
      >
        Discover a healthier you with PowerPro
      </Typography>

      <Typography
      fontSize="22px"
      lineHeight="35px"
      mb={4}
      >
        The only fitnessapp you'll ever need
      </Typography>

      <Button
      variant='contained'
      color='error'
      href='#exercises'
      xs={{backgroundColor: '#ff2625', padding: '10px'}}
      size='large'
      endIcon={<SendIcon />}
      >
        Explore application
      </Button>

      <Typography
      fontWeight={600}
      color="#ff2625"
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
      }}
      fontSize="200px"
      >
        Exercises
      </Typography>
      <img 
      src={'https://www.exercisebliss.com/wp-content/uploads/2022/09/alexander-jawfox-Kl2t5U6Gkm0-unsplash.jpg'} 
      alt='banner'
      className='hero-banner-img'
      />

    </Box>
  )
}
