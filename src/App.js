import logo from './logo.svg';
import './App.css';
import Headers from './components/header';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
const App = ()=> {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Headers />
    </React.Fragment>
    
  )
}
export default App;
