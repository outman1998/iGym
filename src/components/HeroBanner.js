import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'
import SendIcon from '@mui/icons-material/Send';

export default function HeroBanner() {

  const boxStyle = {
    height: '100vh', // Set the height to 100% of the viewport height
    backgroundImage: 'url("https://cutewallpaper.org/27/black-and-white-senior-fitness-background-wallpaper/cove-athletic-club-belgrades-new-gym.jpeg")',
    backgroundSize: 'cover', // Ensure the background image covers the entire box
    backgroundPosition: 'right',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    // <Box
    // sx={{
    //   mt: {lg: '100px', xs: '70px'},
    //   ml: {sm: '50px'}
    // }}
    // position="relative"
    // p="20px"
    // >
    //   <Typography
    //   color="#FF2625"
    //   fontWeight="600"
    //   fontSize="26px"
    //   >
    //     A world full of exercises
    //   </Typography>

    //   <Typography
    //   fontWeight={700}
    //   sx={{
    //     fontSize: {lg: '64px', xs: '40px'},
    //     width: {lg: '50%'}
    //   }}
    //   >
    //     Discover a healthier you with PowerPro
    //   </Typography>

    //   <Typography
    //   fontSize="22px"
    //   lineHeight="35px"
    //   mb={4}
    //   >
    //     The only fitnessapp you'll ever need
    //   </Typography>

    //   <Button
    //   variant='contained'
    //   color='error'
    //   href='#exercises'
    //   xs={{backgroundColor: '#ff2625', padding: '10px'}}
    //   size='large'
    //   endIcon={<SendIcon />}
    //   >
    //     Explore application
    //   </Button>

    //   <Typography
    //   fontWeight={600}
    //   color="#ff2625"
    //   sx={{
    //     opacity: 0.1,
    //     display: {lg: 'block', xs: 'none'}
    //   }}
    //   fontSize="200px"
    //   >
    //     Exercises
    //   </Typography>
    //   <img 
    //   src={'https://www.exercisebliss.com/wp-content/uploads/2022/09/alexander-jawfox-Kl2t5U6Gkm0-unsplash.jpg'} 
    //   alt='banner'
    //   className='hero-banner-img'
    //   />

    // </Box>

    <Box style={boxStyle}>

      <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px', // Add padding if needed
              }}
      >
      <Typography
      color="#fff"
      fontSize="25px"
      >
        A free world full of exercises
      </Typography>
      <Typography
      color="#fff"
      sx={{
        fontSize:{
          xs: '40px',
          sm: '50px',
          md: '65px',
          lg: '65px'
        },
        fontWeight: 700,
        marginBottom: "10px",
        marginTop: 0,
        paddingTop: 0
      }}
      >
        Get fit, stay strong & motivated!
      </Typography>

      <Button
      variant='contained'
      color='error'
      href='#exercises'
      xs={{
        backgroundColor: '#ff2625', 
        padding: '10px',
        textTransform: 'lowercase',
      }}
      style={{
        textTransform: 'inherit',
        fontSize: '18px'
      }}
      size='large'
      endIcon={<SendIcon />}
      >
        Explore application
      </Button>

      <div 
      className='mouse_scroll'
      style={{
        paddingTop: '40px'
      }}
      >

        <div
          className='mouse'
          style={{
            height: '42px',
            width: '24px',
            borderRadius: '14px',
            transform: 'none',
            border: '2px solid #fff',
          }}
        >
          <div
            className='wheel'
            style={{
              border: '2px solid #fff',
              color: 'white',
              display: 'block',
              margin: '5px auto',
              background: '#fff',
              position: 'relative',
              height: '4px',
              width: '4px',
              borderRadius: '8px',
              animation: 'continuousBounce .6s linear infinite',
            }}
          ></div>
        </div>

        <span
        style={{
          marginTop: '-1px',
          display: 'block',
          transform: 'rotate(45deg)',
          borderRight: '2px solid #fff',
          borderBottom: '2px solid #fff',
          margin: '0 0 3px 4px',
          width: '16px',
          height: '16px',
          animation: 'fadeeAnimation 2s infinite', // Adjust the duration

        }}
        >
        </span>

        <span
        style={{
          marginTop: '-1px',
          display: 'block',
          transform: 'rotate(45deg)',
          borderRight: '2px solid #fff',
          borderBottom: '2px solid #fff',
          margin: '-7px 0 3px 4px',
          width: '16px',
          height: '16px',
          animation: 'fadeeAnimation 2s infinite', // Adjust the duration
          animationDelay: '.2s'
        }}
        >
        </span>

        <span
        style={{
          marginTop: '-1px',
          display: 'block',
          transform: 'rotate(45deg)',
          borderRight: '2px solid #fff',
          borderBottom: '2px solid #fff',
          margin: '-7px 0 3px 4px',
          width: '16px',
          height: '16px',
          animation: 'fadeeAnimation 2s infinite', // Adjust the duration
          animationDelay: '.3s'
        }}
        >
        </span>

      </div>


      </div>

    </Box>
  )
}
