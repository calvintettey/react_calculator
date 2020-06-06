import React from 'react';
import logo from './logo.svg';
import './App.css';
import './calc.css';
import Result from './result_component';
import Key from './key_component';


let Key_Data = ['AC', '+/-', '%', '÷', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

function App() {
  return (
    <div className="App">
      <div class="container">
        <Result/>

        <div class="keys">

        {
            Key_Data.map((name) => {
              return <Key name={name}/>
            })
        }   

        </div>
     </div>
    </div>
  );
}

export default App;



/*
Calvin Tettey
React - Components & Props 
Codetrain Gen14
*/ 