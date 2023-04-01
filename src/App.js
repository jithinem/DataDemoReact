import './App.css';
import User from './components/User';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  //creating a state
  const [username,setUsername]=useState('Anu')
  const [age,setAge]=useState('25')
  return (
    <div className="App">
      <header className="App-header">
        <h4>Data passing between components</h4>
        <User username={username} age={age} />
        <h4>Display collection of data-Array</h4>
        <Employee/>
      </header>
    </div>
  );
}

export default App;
