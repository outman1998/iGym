import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Typography } from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card w-1/3 m-auto mb-10' to={`/exercises/${exercise.id}`}>
        <img 
        src={exercise.gifUrl} 
        alt={exercise.name} 
        loading='lazy'
        width="auto"
        />

        <div className='flex justify-start items-center mt-3'>
          <button
          className='mr-2 bg-[#ffa9a9] text-[#14px] rounded-lg py-1 px-5'
          > 
            {exercise.bodyPart}
          </button>

          <button
            className='mr-2 bg-[#fcc757] text-[#14px] rounded-lg py-1 px-5'
          > 
            {exercise.target}
          </button>
        </div>

        <p
        className='text-black mt-5 text-[17px]'
        >
          {exercise.name}
        </p>
        <button>
          See details
        </button>
    </Link>
  )
}

export default ExerciseCard