import { FormularioContacto } from "./FormularioContacto"
import { MapaContacto } from "./MapaContacto"



export const SeccionContacto = () => {
    return (
        <section>

            <div className="bg-gray-700 pt-4 px-20 pb-8">

                <div className="text-white text-center p-10 mt-14">
                    <h2 className="text-3xl font-bold">CONTACTO</h2>
                    <p className="text-xl font-semibold pb-2">
                        No dudes en enviarnos todas tus inquietudes
                    </p>             
                </div>

                <div className="grid xs:grid-cols-1 md:grid-cols-2">
                    
                    <MapaContacto />

                    <FormularioContacto />

                </div>

            </div>

        </section>
    )
}