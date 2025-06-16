import {NuevaCard}  from './NewCard';
import NewsData from './list';
import './estilo.css';
function App() {

  return (
<>
    <h1>Noticias Musicales (づ￣ 3￣)づ</h1>
    <div className='card-container'>
    {NewsData.map((noticia) => (
    <NuevaCard
      key={noticia.id}
      titulo={noticia.titulo}
      descripcion={noticia.descripcion}
      fuente={noticia.fuente}
      imagen={noticia.imagen}
      />
    ))}
    
  </div>
  </>
  );
}

export default App
