import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './components/Calendar'

function App(props:any) {
  const [value, onChange = useState(new Date());
  return (
    <div className="App">
      <h1>GrowUp</h1>
      <Cal{...props}/>
    </div>
  );
}

export default App;
