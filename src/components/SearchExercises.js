import React, {useState, useEffect} from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

export default function SearchExercises({setExercises, bodyPart, setBodyPart}) {

  // holds the value of searchbar
  const [search, setSearch] = useState('')
  // holds the possible bodyparts
  const [bodyParts, setBodyParts] = useState([])

// function that fetches all possible bodyparts in api
  useEffect(() => {

    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
      setBodyParts(['all', ...bodyPartsData]);
      console.log(bodyParts);
    }
    fetchExercisesData();
  }, [])

// func that handles the searchbar
  const handleSearch = async () => {

    // if user have passed something it will fetch possible exercies to that passed bodypart
    if(search) {
      const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${search}`, exerciseOptions);

      const searchedExercises = exercisesData.filter((exercise) => {
        exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)
      })
      console.log(search, exercisesData);
      // setting searchbar to be empty after user has pressed btn
      setSearch('')
      setExercises(exercisesData)
    }

  }

  return (
    <Stack 
    alignItems="center" 
    mt="37px" 
    justifyContent="center" 
    p="20px"
    width="100"
    >
      <Typography
      fontWeight={700}
      sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }}
      mb="50px"
      textAlign="center"
      >
        Your Personalized Fitness <br /> Adventure Starts Here
      </Typography>

      <Box
      position="relative"
      mb="72px"
      >
        <TextField
        sx={{
          input: {
            fontWeight: '700', 
            border: 'none', 
            borderRadius: '4px'
          },
          width: {lg: '800px', xs: '350px'},
          backgroundColor: '#fff', 
          borderRadius: '40px'
        }}
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder='Search after exercise'
        type='text'
        />

        <Button 
        className='search-btn'
        sx={{
          bgcolor: '#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: {lg: '175px', xs: '80px'},
          fontSize: {lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>

      </Box>

      <Box
      sx={{
        position: 'relative',
        width: '100%',
        p: '20px'
      }}
      >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyParts={setBodyPart} />

      </Box>
    </Stack>
  )
}
