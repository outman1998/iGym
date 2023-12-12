import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import Stats from '../components/Stats';
import AboutUs from '../components/AboutUs';

export default function Home() {

  return (
    <Box>

      <HeroBanner />
      <Stats />
      <AboutUs />

    </Box>
  )
}
