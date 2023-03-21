import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import './styles/css/styles.css';
import Header from './components/Header';
import Main from './components/Main';
import {FaWhatsapp} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Main/>
      <a href="tel:+34684025751" className='whatsapp-icon'>
        <FaWhatsapp/>
      </a>
    </div>
  );
}

export default App;
