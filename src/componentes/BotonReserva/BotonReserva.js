


export const BotonReserva = () => {

    const handleReserva = () => {
        console.log('ir a reservar')
    }

    return(
        <div className="mt-5">
            <a href="/#" 
                onClick={handleReserva}
                className="bg-transparent hover:bg-yellow-600 text-yellow-600 hover:text-gray-700 
                font-bold py-2 px-4 border-solid border-2 border-yellow-600 rounded-lg">
                RESERVA TU AVENTURA.
            </a>
        </div>
    )
}