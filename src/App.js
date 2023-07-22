import './App.css';
import { BannerInicio } from './Components/BannerInicio/BannerInicio';
import { Navbar } from './Components/NavBar/NavBar';
import { SeccionHabitaciones } from './Components/SeccionHabitaciones/SeccionHabitaciones';
import { SeccionPrecios } from './Components/SeccionPrecios/SeccionPrecios';
import { SeccionPregFrecuentes } from './Components/SeccionPregFrecuentes/SeccionPregFrecuentes';
import { SeccionQueEs } from './Components/SeccionQueEs/SeccionQueEs';





function App() {
  return (
    <div>
      <Navbar />
      <BannerInicio />
      <SeccionQueEs />
      <SeccionHabitaciones />
      <SeccionPrecios />
      <SeccionPregFrecuentes />

      
    </div>



  )
}

export default App;
