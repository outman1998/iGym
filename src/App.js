import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import ExerciseDetail from '../src/pages/ExerciseDetail';
import Footer from './components/Footer';
import Search from '../src/pages/Search';
import Alert from './components/Alert';
import Bodyarea from './pages/Bodyarea';

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/bodyarea/:id" element={<Bodyarea />} />
      </Routes>
      <Alert />
      <Footer />
    </Box>
  );
}

export default App;
