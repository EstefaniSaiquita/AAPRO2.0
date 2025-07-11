import React, { useState, useEffect } from 'react';
import './App.css'
import { Nav } from './components/nav';
import { NuevaCard } from './components/card';
import { CardList } from './components/cardList'
import { Footer } from './components/footer';
import Buscador  from './components/buscador';

const App = () => {
  const [busqueda, setBusqueda] = useState('');

  const filtro = CardList.filter((card) =>
    card.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

//   //intento de localStorage
// function guardarDatos(key, valorInicial) {
  
// }

  return (
    <div className='app-container'>

      <div className='nav-container'>
      <Nav>
      <Buscador setBusqueda={setBusqueda}/>
      </Nav>
      </div>

    <div className='portada'>
    <img src="/portada.png" alt="" />
    </div>

      <div className='card-container'>
      {filtro.map((card) => (
        <NuevaCard
          key={card.id}
          titulo={card.titulo}
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