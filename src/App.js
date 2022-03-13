import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
const App = ()=> {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch();
  const handleIncrement = ()=> {
    dispatch({type: "INCREMENT", value: 1})
  }
  const handleDecrement = ()=> {
    dispatch({type: "DECREMENT", value: 1})
  }
  return (
    <React.Fragment>
      <div onClick={handleIncrement}> 
        +
      </div>
      <div onClick={handleDecrement}>
        -
      </div>
      <div>{state.counterData.counter}</div>
    </React.Fragment>
    
  )
}
export default App;
