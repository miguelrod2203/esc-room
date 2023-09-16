import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BannerInicio } from './Components/BannerInicio/BannerInicio';
import { Navbar } from './Components/NavBar/NavBar';
import { SeccionContacto } from './Components/SeccionContacto/SeccionContacto';
import { SeccionHabitaciones } from './Components/SeccionHabitaciones/SeccionHabitaciones';
import { SeccionPrecios } from './Components/SeccionPrecios/SeccionPrecios';
import { SeccionPregFrecuentes } from './Components/SeccionPregFrecuentes/SeccionPregFrecuentes';
import { SeccionQueEs } from './Components/SeccionQueEs/SeccionQueEs';
import { SeccionVerMas } from './Components/SeccionVerMas/SeccionVerMas';
import { SeccionReserva } from './Components/SeccionReserva/SeccionReserva';





function App() {
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={ <BannerInicio /> }/>
        <Route path="/queEs" element={ <SeccionQueEs /> }/>
        <Route path="/habitaciones" element={ <SeccionHabitaciones /> }/>
        <Route path="/habitaciones/:id" element={ <SeccionVerMas /> }/>
        <Route path="/precios" element={ <SeccionPrecios /> }/>
        <Route path="/preguntasFrecuentes" element={ <SeccionPregFrecuentes /> }/>
        <Route path="/contactos" element={ <SeccionContacto /> }/>
        <Route path="/reserva" element={ <SeccionReserva /> }/>
        

      </Routes>

    </BrowserRouter>



  )
}

export default App;
