import { Children } from "react";

export const NuevaCard = ({titulo, imagen, precio}) => {
    return (
    <div className="card">
        <div>
        <img src={imagen ? imagen : 'https://placehold.co/200/png'} alt="{titulo} " />
        <h2>{titulo}</h2>
        <p>{precio}</p>
        <button className="boton">Comprar</button>
        </div>
    </div>
    );
};