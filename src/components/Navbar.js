import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png'
export default function Navbar() {
  return (
    <Stack
    direction='row'
    justifyContent='space-around'
    sx={{
    gap: {sm: '122px', xs: '40px'}, 
    mt: {sm: '32px', xs: '20px'},
    justifyContent: 'none',
    alignItems: 'center',
    px:'20px',
    position: "absolute"
    }} 
    >
        <Typography 
        to="/"
        sx={{
          fontSize: {lg: '25px', xs: '18px'},
        }}
        color="#fff"
        >
          <p>PowerPro</p>
        </Typography>

        <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
            <Link style={{textDecoration: 'none', color
        :'#fff', borderBottom: '3px solid #FF2325'}}>Home</Link>
            <a href='#exercises' style={{textDecoration: 'none', color: '#fff'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}
