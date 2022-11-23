import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  
  const nombre = 'Tienda Online'
  const estilos = {
    color: 'blue',
    backgroundColor: 'yellow',
    padding: 20
  }

  const mensaje = ()=> {
    console.log('mensaje en la consola');
  }

  return (
 
    <>
      <div className='App'> 
        <NavBar/>
        <ItemListContainer/>
        <h1>Bienvenidos a nuestra {nombre} </h1>
        
       


        <li>
          <a href='./aperitivos'>
          Aperitivos
          </a>
        </li>
        <li>
        <a href='./gaseosas'>
          Gaseosas
        </a>
        </li>
        <li>
        <a href='./cervezas'>
          Cervezas
        </a>
        </li>
        <li>
        <a href='./bebidablanca'>
          Bebida blanca
        </a>
        </li>
        <Footer/>
      </div>

           </>
  );
}

export default App;
