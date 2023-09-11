import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";



export const Navbar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleNavar = () => {
        setMostrarMenu(!mostrarMenu)
        console.log("click")
    }


    return (
        <header className="z-10 w-full fixed">
            <nav className="bg-gray-700 border-b-2 border-yellow-300">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <div className="flex items-center">
                        <Link to="/">
                            {/* <img className="h-10 w-auto mr-1 rounded-xl" src="../../imagenes/logo5.jpeg" alt="Logo"/> */}
                            <p className="p-1 border-2 border-yellow-300 rounded-md text-yellow-300 hover:text-white ">ESC</p>
                        </Link>            
                    </div>
                    <button onClick={toggleNavar} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-lg text-yellow-300 rounded-lg md:hidden hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <AiOutlineMenu/>
                    </button>
                    <div className={`${ mostrarMenu ? "flex" : "hidden"}  w-full md:block md:w-auto justify-center`}>
                        <div className="font-medium flex flex-col p-1 md:p-0 mt-4 md:flex-row md:mt-0 md:border-0">
                            <Link to="/queEs" className="text-yellow-300 hover:text-white px-3 py-1 text-sm font-medium border-b-2 border-transparent hover:border-b-2 hover:border-yellow-300 duration-500">¿Que es?</Link>
                            <Link to="/habitaciones" className="text-yellow-300 hover:text-white px-3 py-1 text-sm font-medium border-b-2 border-transparent hover:border-b-2 hover:border-yellow-300 duration-500">Habitaciones</Link>
                            <Link to="/precios" className="text-yellow-300 hover:text-white px-3 py-1 text-sm font-medium border-b-2 border-transparent hover:border-b-2 hover:border-yellow-300 duration-500">Precios</Link>
                            <Link to="/preguntasFrecuentes" className="text-yellow-300 hover:text-white px-3 py-1 text-sm font-medium border-b-2 border-transparent hover:border-b-2 hover:border-yellow-300 duration-500">Preguntas Frecuentes</Link>
                            <Link to="/contactos" className="text-yellow-300 hover:text-white px-3 py-1 text-sm font-medium border-b-2 border-transparent hover:border-b-2 hover:border-yellow-300 duration-500">Contactos</Link>
                            <Link to="/reserva" className="text-yellow-300 hover:text-white px-3 py-1 text-sm font-medium border-b-2 border-transparent hover:border-b-2 hover:border-yellow-300 duration-500">Reserva Ya!</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}