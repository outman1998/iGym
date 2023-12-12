import { Box } from '@mui/material'
import React from 'react'
import Categories from '../components/Categories';
import Banner from '../components/Banner';
const Exercises = () => {
  return (
    <Box>
      <Banner title="MAKE YOUR BODY" titleTwo="FIT PERFECT" paragraph="Exclusive" />
      <Categories />
    </Box>
  )
}

export default Exercises