import React, { useState} from 'react';
import './App.css'
import { Nav } from './components/nav';
import { NuevaCard } from './components/card';
import { CardList } from './components/cardList'
import { Footer } from './components/footer';
import Buscador  from './components/buscador';
import {Carrito} from './components/carrito';

const App = () => {
  const [busqueda, setBusqueda] = useState('');

  const filtro = CardList.filter((card) =>
    card.producto.toLowerCase().includes(busqueda.toLowerCase())
  );
  
  

  return (
    <div className='app-container'>

      <div className='nav-container'>
      <Nav>
      <Buscador setBusqueda={setBusqueda}/>
      </Nav>


      </div>
      <Carrito/>


      <div className='portada'>
      <img src="/portada.png" alt="" />
      </div>

      <div className='card-container'>
      {filtro.map((card) => (
        <NuevaCard
          key={card.id}
          producto={card.producto}
          precio={card.precio}
          imagen={card.imagen}
        />
      ))}
      </div>
      <Footer/> 
    </div>
  );
};

export default App;