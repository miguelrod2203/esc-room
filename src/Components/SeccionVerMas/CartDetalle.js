

export const CartDetalle = ( producto ) => {
    
    return (
        <div className="grid xs:grid-cols-1 md:grid-cols-2 bg-gray-700 pt-20 pb-14">
          <div className="px-10">
            <img className="rounded-xl" src={producto.imagen} alt={producto.nombre} />
          </div>
          <div className="text-yellow-300 px-10">
            <h2 className="text-3xl font-bold text-center m-2">{producto.nombre}</h2>
            <p>Tematica: {producto.tematica}</p>
            <p>Duracion: {producto.duracion}</p>
            <p>N° de jugadores: {producto.jugadores}</p>
            <p>Dificultad: {producto.dificultad}</p>
            <p>Resumen: {producto.resumen}</p>
          </div>
        </div>
    )
}