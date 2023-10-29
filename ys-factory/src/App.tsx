import React from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './Context';
import { Typography } from '@mui/material';
import DrawerAppBar from './uiparts/DrawerAppBar';
import TopPage from './pages/TopPage';

function App() {
  return (
    <>
      <DrawerAppBar/>
      <TopPage/>
    </>
  );
}

export default App;
