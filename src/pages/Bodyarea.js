import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useParams } from 'react-router-dom';
import { Typography, Box, Stack, Button  } from '@mui/material';
import Dummydata from '../../src/Data';
import { Link } from 'react-router-dom';
import { useCtx } from '../context/Context';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Bodyarea = () => {

    const { id } = useParams();
    const {exercises, setExercises} = useCtx();


    useEffect(() => {
      const fetchExercisesData = async () => {
        try {
          let exerciseData = [];
    
          if (id === 'all') {
            exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
          } else {
            exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${id}`, exerciseOptions);
          }
    
          setExercises(exerciseData);
        } catch (error) {
          // Handle the error, you can log it or show an error message to the user
          console.error('Error fetching exercise data:', error);
        }
      };
    
      fetchExercisesData();

    }, [])

  return (
    <>

    <Banner 
    title="EXERCISES ABOUT THE BACK" 
    paragraph="Back Exercises" 
    />

    <Box
    sx={{
      margin: '100px 0px'
    }}
    >

      <Typography
      sx={{
        fontSize: '35px',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}
      >
        {id[0].toUpperCase() + id.slice(1, 4)} Exercises
      </Typography>

      <Box
      sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'flex',
          lg: 'flex'
        },
        flexWrap: 'wrap'
      }}
      >
        {exercises.map((exercise) => (
          <Box 
          className='boksen'
          sx={{
            width: {xs: '100%', sm: '100%', md: '100%', lg: '33%'},
            textAlign: 'center',
            marginBottom: {xs: '70px', sm: '70px', md: '70px', lg: '50px'}
          }}
          >
            <img 
            src={exercise.gifUrl} 
            alt={exercise.name} 
            loading='lazy'
            Maxwidth="300px"
            sx={{
              maxWidth: {
                xs: '200px',
                sm: '200px',
                md: '300px',
                lg: '300px'
              }
            }}
            />

            <Stack 
            direction="row" 
            justifyContent="center"
            alignItems="center"
            >
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
          </Box>
        ))}
      </Box>

    </Box>


    </>
  )
}

export default Bodyarea