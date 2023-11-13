import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import billed from '../assets/images/fitness.png';
import SendIcon from '@mui/icons-material/Send';

export default function Stats() {
  return (
    <>
      <Typography
      fontWeight={700}
      sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }}
      mb="50px"
      mt="50px"
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
      <Box 
      className='et'
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
        <Typography>3</Typography>
        <Typography>YEARS OF EXPERIENCE</Typography>
      </Box>

      <Box className='to'
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
        <Typography>5</Typography>
        <Typography>SKILLED TRAINERS</Typography>
      </Box>

      <Box className='tre'
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
        <Typography>43K</Typography>
        <Typography>CALORIES BURNED</Typography>
      </Box>

      <Box className='fire'
      sx={{
        width: {xs: '70%', sm: '50%', md: '50%', lg: '25%'},
        margin: 'auto',
        textAlign: 'center',
        padding: '30px 0px',
        border: '2px solid black'
      }}
      >
        <Typography>88</Typography>
        <Typography>HAPPY MEMBERS</Typography>
      </Box>
    </Box>

  <div className='bg'>
    <img className='pic' width="100%" src={billed} />
    
    <Box className='abs'>
    <Typography
    fontSize="45px"
    color="white"
    fontWeight={700}
    sx={{
      width: {lg: '50%', md: '50%', sm: '50%'}
    }}
    >
    Achieve your training goals with the right plan, not with luck.
    </Typography>

    <Button
    style={{
      backgroundColor: "white",
      fontSize: "17px",
      color: 'black',
      textTransform: 'inherit'
    }}
    variant="contained"
    endIcon={<SendIcon />}
    >
      Become member
    </Button>
    </Box>

  </div>
  </>

  )
}
