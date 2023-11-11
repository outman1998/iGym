import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Typography } from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercises/${exercise.id}`}>
        <img 
        src={exercise.gifUrl} 
        alt={exercise.name} 
        loading='lazy'
        width="300px"
        />

        <Stack direction="row">
          <Button
          sx={{
            mt: '10px',
            mr: '10px',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
          > 
            {exercise.bodyPart}
          </Button>

          <Button
          sx={{
            mt: '10px',
            color: '#fff',
            background: '#fcc757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
          > 
            {exercise.target}
          </Button>
        </Stack>
        <Typography
        color="#000"
        fontWeight="light"
        mt="10px"
        textTransform="capitalize"
        fontSize="17px"
        >
          {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard