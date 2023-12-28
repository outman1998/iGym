import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useCtx } from '../../context/Context';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '7px'
};


function CustomTabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

const Authmodal = () => {

    const {setAlert, open, setOpen, handleOpen} = useCtx();

    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const googleProvider =  new GoogleAuthProvider();

    const signInWithGoogle = () => {
      signInWithPopup(auth, googleProvider).then((result) => {
        setAlert({
          open: true,
          type: 'success',
          message: `Sign Up Successful. Welcome ${result.user.email}`
        });
        handleClose();

      }).catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: 'error'
        });
        return;
      })
    }
  
  return (
    <>
      <button 
      onClick={handleOpen}
      className='bg-red-400 hover:bg-red-500 transition-all duration-300 ease-in-out text-white py-2 px-10 rounded-full text-bold cursor-pointer'
      >
        Login
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Login" />
                    <Tab label="Sign Up" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Login handleClose={handleClose} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <SignUp handleClose={handleClose} />
                </CustomTabPanel>
            </Box>

            <Box sx={{textAlign: 'center', padding: '0px 24px'}}>
              <span style={{fontWeight: 'bold'}}>OR</span>
              <GoogleButton 
              style={{width: '100%', outline: 'none', margin: '20px 0px'}}
              onClick={signInWithGoogle}
              />
            </Box>
        </Box>

      </Modal>
    </>
  )
}

export default Authmodal