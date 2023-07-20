import './App.css';
import { BannerInicio } from './Components/BannerInicio/BannerInicio';
import { Navbar } from './Components/NavBar/NavBar';
import { SeccionHabitaciones } from './Components/SeccionHabitaciones/SeccionHabitaciones';
import { SeccionQueEs } from './Components/SeccionQueEs/SeccionQueEs';





function App() {
  return (
    <div>
      <Navbar />
      <BannerInicio />
      <SeccionQueEs />
      <SeccionHabitaciones />

      
    </div>



  )
}

export default App;
