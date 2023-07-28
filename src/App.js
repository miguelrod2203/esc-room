import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BannerInicio } from './Components/BannerInicio/BannerInicio';
import { Navbar } from './Components/NavBar/NavBar';
import { SeccionContacto } from './Components/SeccionContacto/SeccionContacto';
import { SeccionHabitaciones } from './Components/SeccionHabitaciones/SeccionHabitaciones';
import { SeccionPrecios } from './Components/SeccionPrecios/SeccionPrecios';
import { SeccionPregFrecuentes } from './Components/SeccionPregFrecuentes/SeccionPregFrecuentes';
import { SeccionQueEs } from './Components/SeccionQueEs/SeccionQueEs';





function App() {
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={ <BannerInicio /> }/>
        <Route path="/" element={ <SeccionQueEs /> }/>
        <Route path="/" element={ <SeccionHabitaciones /> }/>
        <Route path="/" element={ <SeccionPrecios /> }/>
        <Route path="/" element={ <SeccionPregFrecuentes /> }/>
        <Route path="/" element={ <SeccionContacto /> }/>
        

      </Routes>

    </BrowserRouter>



  )
}

export default App;
