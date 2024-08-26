import { useState } from 'react';
import './Table.css';


function Table () {
  const [simbolos, setSimbolos] = useState([])
  const [numeros, setNumeros] = useState([])

  const agregarNum = (value) => {
    setNumeros(numeros + value);
  }
  const agregarSimbolo = (value) => {
    if (numeros !== '' && !/[\+\-\*/]$/.test(numeros)) {
      setNumeros(numeros + value);
    }  
  }

  const borrar = () => {
    setNumeros('');
    setSimbolos('');
    };
    
    const calcularResultado = () => {
      const resultado = eval(numeros);
      setNumeros(resultado.toString()); 
      setSimbolos(''); 
    };

  //aka quiero agarrar el valor del input y llevarlo al jsx principal
  return (
    <div className="table-container">
      <table className="custom-table">
        <div class="calculator">
        <input type="text" value={`${numeros} ${simbolos}`} />
          <div class="row">
              <button class="button" onClick={() => agregarNum('1')}>1</button>
              <button class="button" onClick={() => agregarNum('2')}>2</button>
              <button class="button" onClick={() => agregarNum('3')}>3</button>
            </div>
            <div class="row">
              <button class="button" onClick={() => agregarNum('4')}>4</button>
              <button class="button" onClick={() => agregarNum('5')}>5</button>
              <button class="button" onClick={() => agregarNum('6')}>6</button>
            </div>
            <div class="row">
              <button class="button" onClick={() => agregarNum('7')}>7</button>
              <button class="button" onClick={() => agregarNum('8')}>8</button>
              <button class="button" onClick={() => agregarNum('9')}>9</button>
            </div>
            <div class="row">
              <button class="button" onClick={borrar}>C</button>
              <button class="button" onClick={() => agregarSimbolo('+')}>+</button>
              <button class="button" onClick={calcularResultado} >=</button>
            </div>
            <div class="row">
              <button class="button" onClick={() => agregarSimbolo('*')}>*</button>
              <button class="button" onClick={() => agregarSimbolo('-')}>-</button>
              <button class="button" onClick={() => agregarNum('/')}>/</button>
            </div>
         </div>
      </table>
    </div>
  );
};

export default Table;
