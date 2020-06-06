import React from 'react';
import Hello from "./Hello";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div><p>Hello My Name is <strong>{props.name}</strong></p></div>

      <h3>This is a Heading in Div Tag</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <p>You can use JS Expresseion in React as Well Like 2+2 = {2+2}  </p>
      <Hello /> 



    </div>
  );
  }
export default App;
