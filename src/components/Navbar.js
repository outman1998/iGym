import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Logoe from '../assets/images/logoe.png';

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

      <img width="50px" src={Logoe} />

        <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
            <Link style={{textDecoration: 'none', color: '#fff'}}>Home</Link>
            <a href='#exercises' style={{textDecoration: 'none', color: '#fff'}}>Exercises</a>
            <a href='#exercises' style={{textDecoration: 'none', color: '#fff'}}>About</a>
            <a href='#exercises' style={{textDecoration: 'none', color: '#fff'}}>Exslusive</a>
        </Stack>
    </Stack>
  )
}
