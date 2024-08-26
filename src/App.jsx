import React, { useState, useEffect, useId  } from 'react';
import './App.css';
import Table from "./componentes/Table"
import axios from 'axios';

function App() {
  const [nro, setNro] = useState(0);
  
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
