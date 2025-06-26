export const NuevaCard = ({titulo, imagen, descripcion, fuente}) => {
    return (
      
      <div className="card">
        <div>
          <h2>{titulo}</h2>
          <img src={imagen ? imagen : 'https://placehold.co/600x400/png'} alt="{titulo} " />
          <p>{descripcion} </p>
          <h4>Fuente: {fuente} </h4>
          <button className="boton">Ver más</button>
        </div>
      </div>
      
    );
  };