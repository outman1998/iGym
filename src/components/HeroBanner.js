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
    backgroundAttachment: 'fixed'
  };

  return (

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
      fontSize="22px"
      >
        A Free World Full Of Exercises
      </Typography>
      <Typography
      color="#fff"
      sx={{
        fontSize:{
          xs: '50px',
          sm: '50px',
          md: '65px',
          lg: '75px'
        },
        fontWeight: 700,
        marginBottom: "10px",
        marginTop: 0,
        paddingTop: 0
      }}
      >
        WE HELP YOU ACHIEVE <br /> 
        <span
        style={{
          WebkitTextFillColor: 'transparent',
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: '#c63d2f',
          color: 'blue'
        }}
        >
          YOUR GOALS
        </span>
      </Typography>
{/* 
      <Button
      variant='outlined'
      href='#exercises'
      style={{
        textTransform: 'inherit',
        fontSize: '18px',
        borderRadius: '50px',
        fontSize: '18px',
        border: '2px solid white',
        color: 'white'
      }}
      size='large'
      // endIcon={<SendIcon />}
      >
        Explore
      </Button> */}

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
