import React from 'react';
import './App.sass';
import img from './react.gif';

const App = () => (
  <div className="App">
    Hello React!
    {' '}
    <img src={img} alt="react" />
  </div>
);

export default App;
