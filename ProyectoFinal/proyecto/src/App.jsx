import React, { useState} from 'react';
import './App.css'
import { Nav } from './components/nav';
import { NuevaCard } from './components/card';
import { CardList } from './components/cardList'
import { Footer } from './components/footer';
import Buscador  from './components/buscador';
import {Favoritos} from './components/favorito';

const App = () => {
  const [busqueda, setBusqueda] = useState('');

  const filtro = CardList.filter((card) =>
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

  return (
    <div className='app-container'>

      <div className='nav-container'>
      <Nav>
      {/* <Buscador setBusqueda={setBusqueda}/> */}
      </Nav>
      
      {/* <Favoritos favoritos={favoritos}/> */}
      </div>


      <div className='portada'>
      <img src="/portada.png" alt="" />
      </div>

      <main className='contenido'>
      <Buscador setBusqueda={setBusqueda}/>
      <Favoritos favoritos={favoritos}/>

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