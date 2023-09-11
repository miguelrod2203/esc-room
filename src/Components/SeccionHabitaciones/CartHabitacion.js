import { Link } from "react-router-dom"



export const CartHabitacion = ( {producto} ) => {

    return (
        <div className="relative text-center flex items-center xs:w-full md:w-2/5 m-10">
            <img className="rounded-lg" src={producto.imagen} alt={producto.nombre} title={producto.nombre}/>
            <div className="text-white hover:text-yellow-400 hover:font-bold bg-gray-700/40  text-xl absolute inset-x-0 p-2">
                <Link to={`/habitaciones/${producto.id}`} >{producto.nombre}</Link>
            </div>
        </div>
    )
}