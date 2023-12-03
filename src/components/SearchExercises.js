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
  // useEffect(() => {

  //   const fetchExercisesData = async () => {
  //     const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
  //     setBodyParts(['all', ...bodyPartsData]);
  //     console.log(bodyParts);
  //   }
  //   fetchExercisesData();
  // }, [])

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  
        setBodyParts(['all', ...bodyPartsData]);
        console.log(bodyParts);
      } catch (error) {
        // Handle the error when fetching body parts data
        console.error('Error fetching body parts data:', error);
      }
    };
  
    fetchExercisesData();
  }, [bodyParts]);
  

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
    pt="37px" 
    justifyContent="center" 
    p="20px"
    width="100"
    backgroundColor= 'white'
    >
      <Typography
      fontWeight={700}
      sx={{
        fontSize: {lg: '44px', xs: '30px'}
      }}
      pb="50px"
      pt="50px"
      textAlign="center"
      >
        Find the Perfect Workout <br /> For Your Target Muscle Group
      </Typography>

      <Box
      position="relative"
      pb="72px"
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
          width: {lg: '175px', xs: '80px'},
          fontSize: {lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0',
          textTransform: 'inherit'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>

      </Box>

      <Box
      sx={{
        position: 'relative',
        width: '100%'
      }}
      >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />

      </Box>
    </Stack>
  )
}
