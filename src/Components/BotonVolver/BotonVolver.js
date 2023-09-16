import { useNavigate } from "react-router-dom"
import { AiOutlineCaretLeft } from "react-icons/ai";


export const BotonVolver = () => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="mt-5">
            <button className="flex items-center bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-700 
                font-bold p-2 border-solid border-2 border-blue-600 rounded-lg" onClick={handleVolver}>
                <AiOutlineCaretLeft /> Volver
            </button>
        </div>
    )
}