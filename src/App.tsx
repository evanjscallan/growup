import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './components/Calendar'
import CustomCalendar from './components/CustomCalendar'

function App(props:any) {
  
  return (
    <div className="App">
      <h1>GrowUp</h1>
   
      <CustomCalendar/>
    </div>
  );
}

export default App;
