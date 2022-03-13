import logo from './logo.svg';
import './App.css';
import Headers from './components/header';
import { Switch,Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import OrderDetail from './components/orderDetail';
const App = ()=> {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Headers />
        <Switch>
          <Route exact path={"/OrderDetails"} component={OrderDetail}/>
        </Switch>
    </React.Fragment>
    
  )
}
export default App;
