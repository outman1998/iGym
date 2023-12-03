import { Box, Button, TextField } from '@mui/material'
import React, {useState} from 'react'
import { useCtx } from '../../context/Context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Login({handleClose}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {setAlert} = useCtx();

  const handleSubmit = async () => {
    if(!email || !password) {
      setAlert({
        open: 'true',
        message: 'Please fill all the fields',
        type: 'error'
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      setAlert({
        open: true,
        message: `Login successful. Welcome ${result.user.email}`,
        type: 'success'
      })

      handleClose();

    } catch(error) {
      setAlert({
        open: true,
        message: error.message,
        type: 'error'
      })
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
      
      <Button
      variant='contained'
      size='large'
      sx={{backgroundColor: '#EEBC1D'}}
      onClick={handleSubmit}
      >
        Login
      </Button>
    </Box>
  )
}
