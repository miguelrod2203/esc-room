import { BannerInicio } from "../BannerInicio/BannerInicio"
import { SeccionContacto } from "../SeccionContacto/SeccionContacto"
import { SeccionHabitaciones } from "../SeccionHabitaciones/SeccionHabitaciones"
import { SeccionPrecios } from "../SeccionPrecios/SeccionPrecios"
import { SeccionPregFrecuentes } from "../SeccionPregFrecuentes/SeccionPregFrecuentes"
import { SeccionQueEs } from "../SeccionQueEs/SeccionQueEs"



export const Informacion = () => {

    return(
        <div>
            <div> <BannerInicio /> </div>
            <div id="1"> <SeccionQueEs /> </div>
            <div id="2"> <SeccionHabitaciones /> </div>
            <div id="3"> <SeccionPrecios /> </div>
            <div id="4"> <SeccionPregFrecuentes /> </div>
            <div id="5"> <SeccionContacto /> </div>
        </div>
    )
}