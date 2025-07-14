import { Children } from "react";

export const NuevaCard = ({producto, imagen, precio}) => {
    const agregarProducto = () =>{
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const nuevoProducto ={
            producto,
            imagen,
            precio
        }  

    carrito.push(nuevoProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    
    
    return (

    <div className="card">
        <div>
        <img src={imagen ? imagen : 'https://placehold.co/200/png'} alt="{producto} " />
        <h2>{producto}</h2>
        <p>{precio}</p>
        <button className="boton" onClick={agregarProducto}>Comprar</button>
        </div>
    </div>
    );
};