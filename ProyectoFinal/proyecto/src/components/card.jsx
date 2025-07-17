import { Children } from "react";

export const NuevaCard = ({producto, imagen, precio, agregarFavoritos}) => {
    return (

    <div className="card">
        <div>
        <img src={imagen ? imagen : 'https://placehold.co/200/png'} alt="{producto} " />
        <h2>{producto}</h2>
        <p>$ {precio}</p>
        <button >Comprar</button>
        <button className="boton" onClick={() => agregarFavoritos({ producto, precio })}>❤</button>
        </div>
    </div>
    );
};