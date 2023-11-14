import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import billed from '../assets/images/fitness.png';
import SendIcon from '@mui/icons-material/Send';

export default function Stats() {
  return (
    <div style={{backgroundColor: 'white'}}>
      <Typography
      fontWeight={700}
      sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }}
      pb="50px"
      pt="50px"
      textAlign="center"
      
      >
        Your Personalized Fitness <br /> Adventure Starts Here
      </Typography>

    <Box
    className="flexen"
    sx={{
      display: {sm: 'block', md: 'flex', lg: 'flex'}
    }}
    justifyContent="center"
    padding="0px 100px"
    >
      <Box className='et boxen'
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
          WebkitTextStrokeWidth: '3px',
          WebkitTextStrokeColor: 'black'
        }}
        >
          3
        </Typography>
        <Typography>YEARS OF EXPERIENCE</Typography>
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
            WebkitTextStrokeWidth: '3px',
            WebkitTextStrokeColor: 'black'
          }}
        >
          5
        </Typography>
        <Typography>SKILLED TRAINERS</Typography>
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
          WebkitTextStrokeWidth: '3px',
          WebkitTextStrokeColor: 'black'
        }}
        >
          43K
        </Typography>
        <Typography>CALORIES BURNED</Typography>
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
          WebkitTextStrokeWidth: '3px',
          WebkitTextStrokeColor: 'black'
        }}
        >
          88
        </Typography>
        <Typography>HAPPY MEMBERS</Typography>
      </Box>
    </Box>

  <Box 
  className='bg'
  sx={{
    marginTop: '100px',
    position: 'relative',
    backgroundColor: 'black'
  }}
  >
    <img
    className='pic' 
    width="100%" 
    src={billed}
    />
    
    <Box 
    className='abs'
    sx={{
      position: 'absolute',
      top: '30%',
      left: {xs: '4%', sm: '10%', md: '20%', lg: '20%'} 
    }}
    >
    <Typography
    fontSize="45px"
    color="white"
    fontWeight={700}
    sx={{
      width: {xs: '100%', sm: '80%', md: '80%', lg: '50%'} 
    }}
    >
    Achieve your training goals with the right plan, not with luck.
    </Typography>

    <Button
    style={{
      marginTop: '10px',
      fontSize: "17px",
      color: 'black',
      textTransform: 'inherit',
      border: '1px solid white',
      backgroundColor: 'white'
    }}
    variant="contained"
    endIcon={<SendIcon />}
    >
      Become member
    </Button>
    </Box>

  </Box>
  </div>

  )
}
