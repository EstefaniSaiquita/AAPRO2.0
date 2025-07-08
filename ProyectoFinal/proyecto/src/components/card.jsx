export const NuevaCard = ({titulo, imagen, descripcion}) => {
    return (
    <div className="card">
        <div>
        <h2>{titulo}</h2>
        <img src={imagen ? imagen : 'https://placehold.co/200/png'} alt="{titulo} " />
        <p>{descripcion} </p>
        <button className="boton">Ver más</button>
        </div>
    </div>
    );
};