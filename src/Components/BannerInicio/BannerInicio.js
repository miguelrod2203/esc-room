import { BotonReserva } from "../BotonReserva/BotonReserva"



export const BannerInicio= () => {
    return(
        <div className="relative text-center flex justify-center">
            <img className="w-full mt-12" src="../../imagenes/banner.jpg" alt="BannerInicio"/>
            <div className="text-yellow-600 absolute top-1/3">
                <h1 className="text-4xl font-bold">ESC-Room</h1>
                <p className="text-2xl font-semibold">¿PODRAN SALIR A TIEMPO? <br/>VEN A PROBARTE.</p>
                <BotonReserva />
            </div>
        </div>
    )
}