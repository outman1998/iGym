import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import Logoe from '../assets/images/logoe.png';
import Authmodal from './Auth/Authmodal';
import { useCtx } from '../context/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Logo from '../assets/images/logoe.png';

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
    <div className='containerr absolute w-full'>

    <div className='flex justify-between items-center pt-10 w-full'>

    <Link to="/">
      <img 
      src={Logo} 
      alt="logo" 
      className='w-[48px] h-[48px] rounded-lg p-2 bg-black'
      />
    </Link>

    { user &&
    <div
    className='flex'
    >
      <Link 
      className='mr-5 text-xl text-[#3A1212]' 
      to="/"
      >
        Home
      </Link>
      <Link 
      to="/Search" 
      className='text-xl text-[#3A1212]'
      >
        Exslusive
      </Link> 
    </div> }

    { user ? 
    <button 
    onClick={logOut} 
    href="#exercises" 
    className='text-black border-2 border-[#FF2625] cursor-pointer px-10 py-2 rounded'
    >
      Log out
    </button> : <Authmodal />}

    </div>

    </div>

  )
}
