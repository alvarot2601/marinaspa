import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import './styles/css/styles.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
