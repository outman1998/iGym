import React from 'react'
import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises'; 
import { useCtx } from '../context/Context';

const Search = () => {

  const {bodyPart, setBodyPart, exercises, setExercises} =  useCtx();

  return (
    <>
    <Banner 
   title="MAKE YOUR BODY" 
   titleTwo="FIT PERFECT" 
   paragraph="Exclusive"
    />

    <SearchExercises 
        exercises={exercises}
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />

      {/* <Exercises 
        exercises={exercises} 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
      /> */}

    </>
  )
}

export default Search