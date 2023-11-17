import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography, Button, Box } from '@mui/material';
import Logoe from '../assets/images/logoe.png';

export default function Navbar() {
  return (
    <Stack
    direction='row'
    justifyContent='space-around'
    sx={{
    gap: {sm: '122px', xs: '40px'}, 
    mt: {sm: '32px', xs: '20px'},
    justifyContent: 'space-between',
    alignItems: 'center',
    px:'20px',
    position: "absolute",
    width: '100%'
    }} 
    >

      <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
      >
      <img width="50px" src={Logoe} />

        <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        marginLeft="50px"
        >
            <Link style={{textDecoration: 'none', color: '#fff'}}>Home</Link>
            <a href='#exercises' style={{textDecoration: 'none', color: '#fff'}}>Exercises</a>
        </Stack>
        </Box>


        <button
        color='success'
        style={{
          backgroundColor:'transparent',
          color: 'white',
          padding: '10px 35px',
          borderRadius: '30px',
          fontWeight: 'bold',
          border: '1px solid white',
          fontSize: '18px',
          cursor: 'pointer'
        }}
        >
          Login
        </button>
        
    </Stack>
  )
}
