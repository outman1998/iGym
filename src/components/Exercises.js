import React, {useState, useEffect} from 'react';
import { Box, Pagination, Typography, Stack } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

export default function Exercises({exercises, setExercises, bodyPart}) {

  console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // you have to map over this currentexercises and not all exercises as we do it right now below in the code
  let currentExercises = '';
  if (Array.isArray(exercises)) {
    currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    // rest of your code
  } else {
    console.error('exercises is not an array');
  }
  


  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }

  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     let exerciseData = [];

  //     if(bodyPart === 'all') {
  //       exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions)
  //     } else {
  //       exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
  //     }

  //     setExercises(exerciseData)
  //   }
  //   fetchExercisesData();
  // }, [bodyPart]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        let exerciseData = [];
  
        if (bodyPart === 'all') {
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
        } else {
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
  
        setExercises(exerciseData);
      } catch (error) {
        // Handle the error, you can log it or show an error message to the user
        console.error('Error fetching exercise data:', error);
      }
    };
  
    fetchExercisesData();
  }, [bodyPart, setExercises]);
  
  return (
    <Box 
    id="exercises"
    sx={{
      pt: {lg: '110px'},
      backgroundColor: 'white',
      color: 'black'
    }}
    pt="50px"
    p="20px"
    >
      <Typography
      variant='h3'
      mb="46px"
      fontWeight={700}
      sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }}
      >
        Results
      </Typography>

      <div
      className='md:flex flex-wrap justify-between items-center'
      >
        {exercises.length > 0 && exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>

      <Stack
      mt="100px"
      alignItems="center"
      >
        {currentExercises.length > exercisesPerPage && (
          <Pagination 
          color='#111111'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
          />
        )}
      </Stack>
    </Box>
  )
}
