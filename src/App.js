import './App.css';
import Header from './components/header';
import { Switch,Route } from 'react-router-dom';
import MainMenu from './components/main-menu';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import OrderDetail from './components/orderDetail';
import Cart from './components/main-menu/cart';
const App = ()=> {
  const state = useSelector((state)=>state)
  return (
    <React.Fragment>
      <Header />
        <Switch>
        <Route exact path={"/"} component={MainMenu}/>
        <Route exact path={"/cart"} component={Cart}/>
          <Route exact path={"/OrderDetails"} component={OrderDetail}/>
        </Switch>
    </React.Fragment>
    
  )
}
export default App;
