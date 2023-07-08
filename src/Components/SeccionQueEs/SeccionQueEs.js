


export const SeccionQueEs = () => {
    return (
        <section className="bg-gray-700 pt-4">

            <div className="text-white text-center p-10">
                <h2 className="text-3xl font-bold">¿Que es ESC-Room?</h2>
                <p className="text-xl font-semibold pt-4 pb-4">
                    ESC Room es un desafío en donde tus habilidades lógicas y el 
                    trabajo en equipo es lo único que necesitas.
                </p>             
            </div>
            
            <div className="flex flex-wrap px-10">
                <div className="flex flex-wrap justify-center xs:w-full md:w-1/3 p-2">
                    <img className="rounded-lg" src="../../imagenes/paso1.png" alt="reserva" title="reserva"/>
                    <div className="text-white text-center">
                        <h3 className="text-2xl font-bold pt-20 pb-2">UNO</h3>
                        <p className="pb-14">
                            Reúne a tus amigos y reserva tu hora en nuestra página web
                            y llega con 15 min de anticipacion.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center xs:w-full md:w-1/3 p-2">
                    <img className="rounded-lg" src="../../imagenes/paso2.png" alt="escapar" title="escapar"/>
                    <div className="text-white text-center">
                        <h3 className="text-2xl font-bold pt-20 pb-2">DOS</h3>
                        <p className="pb-14">
                            Intenta escapar una vez que la puerta se cierre comenzará a 
                            correr el reloj.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center xs:w-full md:w-1/3 p-2">
                    <img className="rounded-lg" src="../../imagenes/paso3.png" alt="ingenio" title="ingenio"/>
                    <div className="text-white text-center">
                        <h3 className="text-2xl font-bold pt-20 pb-2">TRES</h3>
                        <p className="pb-14">
                            Resuelve los acertijos, necesitarán todo su ingenio para salir, 
                            pero sólo tienen una hora para lograrlo.
                        </p>
                    </div>
                </div>
            </div>

        </section>
        
    )
}