import React from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './Context';
import { CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import DrawerAppBar from './uiparts/DrawerAppBar';
import Top from './pages/Top';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Works from './pages/Works';
import About from './pages/About';


function App() {
  
  // アプリ全体のテーマを設定
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F9831B'
      }
    }
  });

  // サイト内のURLとエレメントの対応を定義する
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Top/>,
    },
    {
      path: "/works",
      element: <Works/>,
    },
    { path: '/about',
      element: <About/>,
    }
  ]);

  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
