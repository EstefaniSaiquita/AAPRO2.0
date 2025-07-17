import { useState } from "react"

export const ProductoForm = ({agregarProducto}) => {
    const [producto, setProducto] =useState('');
    const [descripcion, setDescripcion] =useState('');
    const [imagen, setImagen] =useState('');
    const [precio, setPrecio] =useState('');
    
    const [visible, setVisible] = useState(false);

    const handleSumit = (e) =>{
        e.preventDefault();
        if (!producto || !precio) return;

        agregarProducto({
            producto,
            descripcion,
            imagen: imagen || 'https://placehold.co/200/png',
            precio : precio || alert,
        });

        setProducto('');
        setDescripcion('');
        setImagen('');
        setPrecio('');
    };

    
    return (
    <div className="formulario-container">
      <button type="button" onClick={() => setVisible(!visible)}>
        {visible ? 'Cerrar' : 'Agregar'}
      </button>

      {visible && (
        <form onSubmit={handleSumit} className="formulario">
          <input
            type="text"
            placeholder="Producto"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
          />

          <input
            type="url"
            placeholder="URL de imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />

          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />

          <button type="submit">Agregar producto</button>
        </form>
      )}
    </div>
  );
};