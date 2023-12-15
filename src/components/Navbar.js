import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import Logoe from '../assets/images/logoe.png';
import Authmodal from './Auth/Authmodal';
import { useCtx } from '../context/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {

  const logOut = () => {
    signOut(auth, )
    console.log("logged out");
    setAlert({
      open: true,
      type: 'success',
      message: 'Logout successful!'
    })


  }

  const {user, setAlert} = useCtx();
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
      <img alt='img' width="50px" src={Logoe} />

        <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        marginLeft="50px"
        >
            {user && <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>Home</Link>}
            {user && <Link to='/Search' style={{textDecoration: 'none', color: '#fff'}}>Exclusive</Link>}

        </Stack>
        </Box>


        { user ?
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
        onClick={logOut}
        >
          Log out
        </button> : <Authmodal /> }
        
    </Stack>
  )
}
