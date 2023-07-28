


export const FormularioContacto = () => {

    return (
        <div className="flex justify-center pb-8">
            <form className="w-80 border border-yellow-400 rounded p-4">

                <label class="block">
                    <input type="text" class="mt-3 p-1 pl-2 block w-full rounded" placeholder="Ingrese su Nombre"/>
                </label>

                <label class="block">
                    <input type="email" class="mt-3 p-1 pl-2 block w-full rounded" placeholder="Ingrese su Correo"/>
                </label>

                <label class="block">
                    <select class="block w-full mt-3 p-1 pl-2 rounded">
                        <option disabled selected>Seleccionar Asunto</option>
                        <option value={"Felicitaciones"}>Felicitaciones</option>
                        <option value={"Sugerencia"}>Sugerencia</option>
                        <option value={"Reservas"}>Reservas</option>
                        <option value={"Reclamos"}>Reclamos</option>
                        <option value={"Gifcard"}>Gifcard</option>
                        <option value={"Otros"}>Otros</option>
                    </select>
                </label>
                
                <label class="block">
                    <textarea class="mt-3 p-1 pl-2  block w-full rounded" rows="5"></textarea>
                </label>

                <div className="mt-3 ">
                    <a href="/#" 
                        className="block w-full text-center bg-transparent hover:bg-yellow-400 text-yellow-400
                        hover:text-gray-700 font-semibold p-2 border border-yellow-400 rounded ">
                        Enviar
                    </a>
                </div>

            </form>
        </div>
    )
}