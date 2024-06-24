import React, {useState, useEffect} from 'react';
import './App.css';
import Card1 from "./componentes/Card1";
import Footer1 from './componentes/Footer1';
import Navbar1 from './componentes/Navbar1';

function App() {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0); 
  const [contenedorMaestro, setContenedorMaestro] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setContenedorMaestro(data);
        setProducts(data.slice(0, count));
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  
  const aumento = () => {
    if (count < 100) {
      setCount(prevCount => {
        const newCount = prevCount + 1;
        setProducts(contenedorMaestro.slice(0, newCount));
        return newCount;
      });
    }
  };

  const decremento = () => {
    if (count > 0) {
      setCount(prevCount => {
        const newCount = prevCount - 1;
        setProducts(contenedorMaestro.slice(0, newCount));
        return newCount;
      });
    }
  };

  return (
    <>
      <Navbar1 aumento={aumento} decremento={decremento} count={count} />
      <div className="main-content">
        {products.map(product => (
          <Card1
            key={product.id}
            title={product.title}
            imageUrl={product.image}
          />
        ))}
      </div>
      <Footer1/>
    </>
  )
}

export default App;
