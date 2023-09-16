import { useNavigate } from "react-router-dom"

export const BotonReserva = () => {

    const navigate = useNavigate()

    const handleReserva = () => {
        navigate("/reserva")
    }

    return (
        <div className="mt-5">
            <button className="bg-transparent hover:bg-yellow-600 text-yellow-600 hover:text-gray-700 
                font-bold py-2 px-4 border-solid border-2 border-yellow-600 rounded-lg" onClick={handleReserva}>
                RESERVA TU AVENTURA.
            </button>
        </div>
    )
}