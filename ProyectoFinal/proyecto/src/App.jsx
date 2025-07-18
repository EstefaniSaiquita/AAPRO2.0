import React, { useState} from 'react';
import './App.css'
import { Nav } from './components/nav';
import { NuevaCard } from './components/card';
import { CardList as CardData} from './components/cardList'
import { Footer } from './components/footer';
import Buscador  from './components/buscador';
import {Favoritos} from './components/favorito';
import  {ProductoForm}  from './components/formulario';

const App = () => {
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState(CardData);

  const filtro = productos.filter((card) =>
    card.producto.toLowerCase().includes(busqueda.toLowerCase())
  );
  
  const [favoritos, setfavoritos] = useState (() => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  })
  const agregarFavoritos = (item) => {
    const nuevos = [...favoritos, item]
    localStorage.setItem("favoritos", JSON.stringify(nuevos))
    setfavoritos(nuevos)
  }

  const agregarProducto = (nuevo) => {
  const id = productos.length + 1;
  setProductos([...productos, { ...nuevo, id }]);

  };
  

  return (
    <div className='app-container'>

      {/* <div className='nav-container'> */}
      <Nav></Nav>
      {/* </div> */}

      <div className='barra'>
      <Favoritos favoritos={favoritos}/>
      <Buscador setBusqueda={setBusqueda}/>
      <ProductoForm agregarProducto={agregarProducto}/>
      </div>

      <main className='contenido'>

      {/* <div className='portada'>
      <img src="/portada.png" alt="" />
      </div> */}

      <div className='card-container'>
      {filtro.map((card) => (
        <NuevaCard
          key={card.id}
          producto={card.producto}
          precio={card.precio}
          imagen={card.imagen}
          agregarFavoritos={agregarFavoritos}
        />
      ))}
        </div>
      </main>

      <Footer/> 
    </div>
  );
};

export default App;