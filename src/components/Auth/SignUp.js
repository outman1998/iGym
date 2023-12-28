import { Box, Button, TextField } from '@mui/material'
import React, {useState} from 'react'
import { useCtx } from '../../context/Context'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

export default function SignUp({handleClose}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const {setAlert} = useCtx();

  const handleSubmit = async () => {
    if(password!== confirmPassword) {
    setAlert({
      open: 'true',
      message: 'Passwords do not match',
      type: 'error'
    });
    return;
    }
    try {
      // if result is true we set the alert to true with a message
      const result = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
      );
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`,
        type: 'success'
      })
      // close the modal automatic if user is signed up
      handleClose();

    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: 'error'
      });
      return;
    }
  }


  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px 0px'
    }}
    >
      <TextField 
      variant='outlined'
      type='email'
      label="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      fullWidth
      />

      <TextField 
      variant='outlined'
      type='password'
      label="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      fullWidth
      />

      <TextField 
      variant='outlined'
      type='password'
      label="Confirm password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      fullWidth
      />

      <button
      className='bg-red-400 text-white p-2 rounded hover:bg-red-500 transition-all duration-300 ease-in-out'
      variant='contained'
      size='large'
      sx={{backgroundColor: '#EEBC1D'}}
      onClick={handleSubmit}
      >
        Sign Up
      </button>
    </Box>
  )
}
