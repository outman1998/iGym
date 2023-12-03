import React from 'react'
import { useCtx } from '../context/Context'
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = () => {

    const {alert, setAlert} = useCtx();
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setAlert({
        open: false,
      });
    };

  return (
    <Snackbar
    open={alert.open} 
    autoHideDuration={3000} 
    onClose={handleClose} 
    >
        <MuiAlert 
        severity={alert.type}
        onClose={handleClose}
        variant='filled'
        elevation={10}
        >
            {alert.message}
        </MuiAlert>
    </Snackbar>
  )
}

export default Alert