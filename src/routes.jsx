import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Parking from './pages/Parking';
import Output from './pages/Output'

function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/output' element={ <Output/> }/>
        <Route path='/parking' element={ <Parking/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
