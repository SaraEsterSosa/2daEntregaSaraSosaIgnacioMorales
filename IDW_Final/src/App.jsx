import BarraNav from './components/BarraNav';
import Home from './components/Home';
import Historia from './components/Historia';
import Contacto from './components/Contacto'
import PiePagina from './components/PiePagina';
import Administracion from './components/Administracion';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './Estilos.css'

function App() {
  return (
    <BrowserRouter> 
      <BarraNav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Historia' element={<Historia/>} />
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/Administracion' element={<Administracion/>} />
      </Routes> 
      <PiePagina/>
    </BrowserRouter>
  );
}

export default App;