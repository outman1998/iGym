import React, {useState, useEffect} from 'react';
import { Box, Pagination, Typography, Stack } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import { Search } from '@mui/icons-material';

export default function Exercises({exercises, setExercises, bodyPart}) {

  console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // you have to map over this currentexercises and not all exercises as we do it right now below in the code
  // const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);



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
  }, [bodyPart]);
  
  return (
    <Box 
    id="exercises"
    sx={{
      mt: {lg: '110px'}
    }}
    mt="50px"
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
        Showing Results
      </Typography>

      <Stack
      direction="row"
      sx={{
        gap: {lg: '110px', xs: '50px'}
      }}
      flexWrap="wrap"
      justifyContent="space-between"
      >
        {exercises.length > 0 && exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack
      mt="100px"
      alignItems="center"
      >
        {exercises.length > exercisesPerPage && (
          <Pagination 
          color='standard'
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
