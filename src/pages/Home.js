import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import Stats from '../components/Stats';
import AboutUs from '../components/AboutUs';

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  console.log(bodyPart);

  return (
    <Box>

      <HeroBanner />
      <Stats />

      <AboutUs />
      
      {/* <SearchExercises 
        exercises={exercises}
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />

      <Exercises 
        exercises={exercises} 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
      /> */}

    </Box>
  )
}
