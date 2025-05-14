import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  let handleClick = () => {
    console.log("button was clicked");
  };

  return (
    <>
      <h1>Material UI</h1>
       <Button variant="contained" onClick={handleClick} >Click me!</Button>
       
    </>
  )
}

export default App
