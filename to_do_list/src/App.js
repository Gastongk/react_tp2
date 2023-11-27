import './App.css';
import logo from './imagenes/logo1.png';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img src={logo} className='logo' />
      </div>
      <div className='mis-tareas-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
