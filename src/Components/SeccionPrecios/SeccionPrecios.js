import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"


export const SeccionPrecios = () => {
    
        const [productos, setProductos] = useState([])

    // la fn pedirDatos() se encuentra en los helpers

    useEffect(()=> {
        pedirDatos()
        .then((res) => {
            setProductos(res)
        })
    }, [])



    return (
        <section className="bg-gray-700 pt-4">

            <div className="text-white text-center p-10 mt-14">
                <h2 className="text-3xl font-bold">PRECIOS</h2>
                <p className="text-xl font-semibold pb-2">
                    El valor varía según el número de jugadores
                </p>             
            </div>
            
            <div className="flex flex-wrap justify-around items-start px-10">
                <div className="flex flex-wrap justify-center w-56 p-4">
                    <img className="rounded-full" src="../../imagenes/equipo2.jpg" alt="equipo2" title="equipo2"/>
                    <div className="text-white text-center">
                        <h3 className="text-2xl font-bold pt-10 pb-2">1 a 2 Personas</h3>
                        <p className="pb-8">
                            {productos.length > 0 && productos[0].precio12} p/p
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center w-56 p-4">
                    <img className="rounded-full" src="../../imagenes/equipo4.jpg" alt="equipo4" title="equipo4"/>
                    <div className="text-white text-center">
                        <h3 className="text-2xl font-bold pt-10 pb-2">3 a 4 Personas</h3>
                        <p className="pb-8">
                            {productos.length > 0 && productos[0].precio34} p/p
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center w-56 p-4">
                    <img className="rounded-full" src="../../imagenes/equipo6.jpg" alt="equipo6" title="equipo6"/>
                    <div className="text-white text-center">
                        <h3 className="text-2xl font-bold pt-10 pb-2">5 a 6 Personas</h3>
                        <p className="pb-8">
                            {productos.length > 0 && productos[0].precio56} p/p
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center w-56 p-4">
                    <img className="rounded-full" src="../../imagenes/equipo7.jpg" alt="equipo7" title="equipo7"/>
                    <div className="text-white text-center">
                        <h3 className="text-2xl font-bold pt-10 pb-2">El 7mo Jugador</h3>
                        <p className="pb-8">
                            Han ganado una pista <br/>
                            {productos.length > 0 && productos[0].precio7} p/p
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-white text-center">
                <p className="text-xl font-semibold pb-4">
                    Las pistas tienen un valor de 1000 pesos y se compran durante la actividad. <br/>
                    Tal vez este escondida una en tu habitacion.
                </p>             
            </div>

        </section>
    )
}