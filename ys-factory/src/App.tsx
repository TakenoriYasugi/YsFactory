import React from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './Context';
import { CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import DrawerAppBar from './uiparts/DrawerAppBar';
import TopPage from './pages/TopPage';

function App() {
  
  // アプリ全体のテーマを設定
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F9831B'
      }
    }
  });

  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <DrawerAppBar/>
        <TopPage/>
      </ThemeProvider>
    </>
  );
}

export default App;
