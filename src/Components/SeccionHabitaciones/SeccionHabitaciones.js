import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ListaDeHabitaciones } from "./ListaDeHabitaciones"

export const SeccionHabitaciones = () => {

    const [productos, setProductos] = useState([])

    // la fn pedirDatos() se encuentra en los helpers

    useEffect(()=> {
        pedirDatos()
        .then((res) => {
            setProductos(res)
        })
    })

    return(
        <section>

            <ListaDeHabitaciones productos={productos} />

        </section>
    )
}