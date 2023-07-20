import { CartHabitacion } from "./CartHabitacion"



export const ListaDeHabitaciones = ( { productos } ) => {

    return (
        <div className="bg-yellow-700 pt-4">
            <div className="text-white text-center p-10">
                <h2 className="text-3xl font-bold">NUESTRAS HABITACIONES</h2>
                <p className="text-xl font-semibold pt-4 pb-4">
                    Cada habitación tiene una temática distinta.
                </p>             
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    productos.length > 0 &&
                    productos.map((producto) => {
                        return (
                            <CartHabitacion key={producto.id} producto={producto} />
                        )
                    })               
                }
            </div>

        </div>
    )
}