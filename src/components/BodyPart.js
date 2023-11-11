import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({item, setBodyPart, BodyPart, imageSrc}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card'
    sx={{
      borderTop: BodyPart === item ? '4px solid #ff2625' : '',
      backgroundColor: 'rgba(0, 0, 0, 0.060)',
      width: 'auto',
      cursor: 'pointer',
      margin: '0px 10px',
      borderRadius: "10px"
    }}
    onClick={() => { 
      setBodyPart(item);
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
    }}
    >
      <img 
      src={imageSrc} 
      alt="dumbbell"
      style={{width: '100%', height: '250px'}}
      />

      <Typography
      fontSize="24px"
      fontWeight="bold"
      color="black"
      textTransform="capitalize"
      p="5px 0px"
      >
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart