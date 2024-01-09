import React, { useState } from 'react';
import './App.css'; 
import Hola from './components/Hola/Hola.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <Hola />
      </div>
    </>
  );
}

export default App;
