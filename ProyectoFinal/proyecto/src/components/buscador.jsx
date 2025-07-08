const Buscador = ({ setBusqueda }) => {
    return (
    <input className="buscador"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setBusqueda(e.target.value)}
    />
    );
};

export default Buscador;