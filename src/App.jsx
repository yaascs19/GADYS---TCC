import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Home from './components/Home';
import Amazonas from './components/Amazonas';
import RioDeJaneiro from './components/RioDeJaneiro';
import RJPontos from './components/RJPontos';
import SobrePage from './components/SobrePage';
import ContatoPage from './components/ContatoPage';
import PerfilPage from './components/PerfilPage';
import MapaPage from './components/MapaPage';
import LugaresPage from './components/LugaresPage';
import CristoRedentor from './components/CristoRedentor';
import Para from './components/Para';
import DestinosPara from './components/DestinosPara';
import Ceara from './components/Ceara';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.replace('/', '') || 'home';
    // Lista completa de rotas válidas
    const validRoutes = ['home', 'para', 'destinospara', 'ceara', 'riodejaneiro', 'rjpontos', 'cristoredentor', 'sobrepage', 'contatopage', 'perfilpage', 'mapapage', 'lugarespage', 'amazonas'];
    return validRoutes.includes(path) ? path : 'home';
  });
  
  const [userType, setUserType] = useState(() => localStorage.getItem('userType') || 'usuario');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  const handleLogin = (loginUserType, userName) => {
    setIsLoggedIn(true);
    setUserType(loginUserType);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', loginUserType);
    localStorage.setItem('userName', userName);
    setCurrentPage('home');
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  useEffect(() => {
    window.history.pushState({}, '', `/${currentPage}`);
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '') || 'home';
      setCurrentPage(path);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // ========= ROTEAMENTO CENTRALIZADO =========
  // Garantindo que setCurrentPage seja passado para TODOS os componentes que precisam dele.
  switch (currentPage) {
    case 'login':
      return <Login onLogin={handleLogin} />;
    case 'para':
      return <Para setCurrentPage={setCurrentPage} />;
    case 'destinospara':
      return <DestinosPara setCurrentPage={setCurrentPage} />;
    case 'ceara':
      return <Ceara setCurrentPage={setCurrentPage} />;
    case 'riodejaneiro':
      return <RioDeJaneiro setCurrentPage={setCurrentPage} />;
    case 'rjpontos':
      return <RJPontos setCurrentPage={setCurrentPage} />;
    case 'cristoredentor':
      return <CristoRedentor setCurrentPage={setCurrentPage} />;
    case 'sobrepage':
      return <SobrePage setCurrentPage={setCurrentPage} />;
    case 'contatopage':
      return <ContatoPage setCurrentPage={setCurrentPage} />;
    case 'perfilpage':
      return <PerfilPage setCurrentPage={setCurrentPage} />;
    case 'mapapage':
      return <MapaPage setCurrentPage={setCurrentPage} />;
    case 'lugarespage':
      return <LugaresPage setCurrentPage={setCurrentPage} />;
    case 'amazonas':
      return <Amazonas setCurrentPage={setCurrentPage} />;
    default:
      return <Home setCurrentPage={setCurrentPage} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
  }
}

export default App;
