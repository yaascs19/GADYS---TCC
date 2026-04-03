import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import useImagePreload from './hooks/useImagePreload';
import App from './App';
import HomePage from './components/HomePage';
import SobrePage from './components/SobrePage';
import MapaPage from './components/MapaPage';
import LugaresPage from './components/LugaresPage';
import PerfilPage from './components/PerfilPage';
import CristoRedentor from './components/CristoRedentor';
import PaoDeAcucar from './components/PaoDeAcucar';
import CataratasIguacu from './components/CataratasIguacu';
import Pelourinho from './components/Pelourinho';
import FernandoNoronha from './components/FernandoNoronha';
import Pantanal from './components/Pantanal';

import MonumentosAmazonas from './components/MonumentosAmazonas'
import MonumentosAmazonas2 from './components/MonumentosAmazonas2'
import TeatroAmazonas from './components/TeatroAmazonas'
import AmazonicoPeixaria from './components/AmazonicoPeixaria';
import ArquipelagoAnavilhanas from './components/ArquipelagoAnavilhanas';
import ForteSaoJose from './components/ForteSaoJose'
import PalacioJustica from './components/PalacioJustica'
import MercadoMunicipal from './components/MercadoMunicipal'
import IgrejaSaoSebastiao from './components/IgrejaSaoSebastiao'
import PalacioRioNegro from './components/PalacioRioNegro'
import NaturezaAmazonas from './components/NaturezaAmazonas'
import EncontroAguas from './components/EncontroAguas'
import ParqueJau from './components/ParqueJau'
import ReservaMamiraua from './components/ReservaMamiraua';
import FlorestaAmazonica from './components/FlorestaAmazonica';
import RioAmazonas from './components/RioAmazonas';
import ParqueAnavilhanas from './components/ParqueAnavilhanas';
import CulturaAmazonas from './components/CulturaAmazonas';
import FestivalParintins from './components/FestivalParintins';
import LendasAmazonicas from './components/LendasAmazonicas';
import ArtesanatoIndigena from './components/ArtesanatoIndigena';
import MusicaRegional from './components/MusicaRegional';
import DancasFolcloricas from './components/DancasFolcloricas';
import LiteraturaCordel from './components/LiteraturaCordel';
import GastronomiaAmazonas from './components/GastronomiaAmazonas';
import Tacaca from './components/Tacaca';
import Pirarucu from './components/Pirarucu';
import Cupuacu from './components/Cupuacu';
import Acai from './components/Acai';
import Tucuma from './components/Tucuma';
import FarinhaMandioca from './components/FarinhaMandioca';
import ContatoPage from './components/ContatoPage';
import Login from './Login';
import MapaLeaflet from './components/MapaLeaflet'
import AdicionarLocal from './components/AdicionarLocal'
import AdminPanel from './AdminPanel';
import SaoPaulo from './components/SaoPaulo';
import MonumentosSaoPaulo from './components/MonumentosSaoPaulo';
import RioDeJaneiro from './components/RioDeJaneiro';
import Para from './components/Para';
import ParaPitu from './components/ParaPitu';
import DestinosPara from './components/DestinosPara';
import RJPontos from './components/RJPontos';
import Ceara from './components/Ceara';
import DestinosAmazonas from './components/DestinosAmazonas';
import CearaPontos from './components/CearaPontos';
import SPPontos from './components/SPPontos';
import Amazonas from './components/Amazonas';
import TranslateButton from './components/TranslateButton';
import Acre from './components/Acre';
import AcrePontos from './components/AcrePontos';
import Amapa from './components/Amapa';
import AmapaPontos from './components/AmapaPontos';
import Rondonia from './components/Rondonia';
import RondoniaPontos from './components/RondoniaPontos';
import Roraima from './components/Roraima';
import RoraimaPontos from './components/RoraimaPontos';
import Tocantins from './components/Tocantins';
import TocantinsPontos from './components/TocantinsPontos';
import ParqueChandless from './components/norte/acre/ParqueChandless';
import CentroHistoricoRioBranco from './components/norte/acre/CentroHistoricoRioBranco';
import FortalezaSaoJoseMacapa from './components/norte/amapa/FortalezaSaoJoseMacapa';
import FerroviaMadeiraMamore from './components/norte/rondonia/FerroviaMadeiraMamore';
import MonteRoraima from './components/norte/roraima/MonteRoraima';
import Jalapao from './components/norte/tocantins/Jalapao';
import MinasGerais from './components/MinasGerais';
import MGPontos from './components/MGPontos';
import EspiritoSanto from './components/EspiritoSanto';
import ESPontos from './components/ESPontos';
import OuroPreto from './components/sudeste/mg/OuroPreto';
import Inhotim from './components/sudeste/mg/Inhotim';
import PedraAzulES from './components/sudeste/es/PedraAzulES';
import Guarapari from './components/sudeste/es/Guarapari';
import Jericoacoara from './components/ceara/Jericoacoara';
import CanoaQuebrada from './components/ceara/CanoaQuebrada';
import DragaoDoMar from './components/ceara/DragaoDoMar';
import BeachPark from './components/ceara/BeachPark';
import PraiaDoFuturo from './components/ceara/PraiaDoFuturo';
import SerraDeBaturite from './components/ceara/SerraDeBaturite';
import ChapadaDoAraripe from './components/ceara/ChapadaDoAraripe';
import CentroHistoricoFortaleza from './components/ceara/CentroHistoricoFortaleza';


function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true')
  const [userType, setUserType] = useState(() => localStorage.getItem('userType') || '')

  const handleLogin = (tipo) => {
    setIsLoggedIn(true)
    setUserType(tipo || localStorage.getItem('userType') || '')
  }
  // Preload das imagens principais das páginas
  const imagesToPreload = [
    '/rj.jpeg',
    '/ama.jpg',
    '/sp.jpg',
    'carnaval.jpg',
    'samba.jpg',
    'bossa.webp',
    'maracatu.jpg',
    'funk.jpg',
    'rock.webp',
    'feijoada.jpg',
    'acairj2.jpg',
    'caipira.jpeg',
    'biscoito.webp',
    'cha-mate-limao-hortela.webp'
  ];
  
  useImagePreload(imagesToPreload);
  
  useEffect(() => {
    // Cadastrar administrador padrão
    const adminUser = {
      email: "yasmincunegundes25@gmail.com",
      password: "Cun*1925",
      userType: "adm",
      userName: "Yasmin Admin"
    }
    
    let users = JSON.parse(localStorage.getItem('users')) || []
    const adminExists = users.find(user => user.email === adminUser.email)
    
    if (!adminExists) {
      users.push(adminUser)
      localStorage.setItem('users', JSON.stringify(users))
      console.log('Administrador cadastrado automaticamente!')
    }
  }, [])
  
  return (
    <LanguageProvider>
    <BrowserRouter>
      <TranslateButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />

        <Route path="/lugares" element={<LugaresPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/cristo-redentor" element={<CristoRedentor />} />
        <Route path="/pao-de-acucar" element={<PaoDeAcucar />} />
        <Route path="/cataratas-iguacu" element={<CataratasIguacu />} />
        <Route path="/pelourinho" element={<Pelourinho />} />
        <Route path="/fernando-noronha" element={<FernandoNoronha />} />
        <Route path="/pantanal" element={<Pantanal />} />
        <Route path="/amazonas" element={<Amazonas />} />
        <Route path="/amazonas/monumentos" element={<MonumentosAmazonas2 />} />
        <Route path="/amazonas/monumentos2" element={<MonumentosAmazonas2 />} />
        <Route path="/teatro-amazonas" element={<TeatroAmazonas />} />
        <Route path="/amazonico-peixaria" element={<AmazonicoPeixaria />} />
        <Route path="/arquipelago-anavilhanas" element={<ArquipelagoAnavilhanas />} />
        <Route path="/forte-sao-jose" element={<ForteSaoJose />} />
        <Route path="/palacio-justica" element={<PalacioJustica />} />
        <Route path="/mercado-municipal" element={<MercadoMunicipal />} />
        <Route path="/igreja-sao-sebastiao" element={<IgrejaSaoSebastiao />} />
        <Route path="/palacio-rio-negro" element={<PalacioRioNegro />} />
        <Route path="/amazonas/natureza" element={<NaturezaAmazonas />} />
        <Route path="/encontro-aguas" element={<EncontroAguas />} />
        <Route path="/parque-jau" element={<ParqueJau />} />
        <Route path="/reserva-mamiraua" element={<ReservaMamiraua />} />
        <Route path="/floresta-amazonica" element={<FlorestaAmazonica />} />
        <Route path="/rio-amazonas" element={<RioAmazonas />} />
        <Route path="/parque-anavilhanas" element={<ParqueAnavilhanas />} />
        <Route path="/amazonas/cultura" element={<CulturaAmazonas />} />
        <Route path="/festival-parintins" element={<FestivalParintins />} />
        <Route path="/lendas-amazonicas" element={<LendasAmazonicas />} />
        <Route path="/artesanato-indigena" element={<ArtesanatoIndigena />} />
        <Route path="/musica-regional" element={<MusicaRegional />} />
        <Route path="/dancas-folcloricas" element={<DancasFolcloricas />} />
        <Route path="/literatura-cordel" element={<LiteraturaCordel />} />
        <Route path="/amazonas/gastronomia" element={<GastronomiaAmazonas />} />
        <Route path="/tacaca" element={<Tacaca />} />
        <Route path="/pirarucu" element={<Pirarucu />} />
        <Route path="/cupuacu" element={<Cupuacu />} />
        <Route path="/acai" element={<Acai />} />
        <Route path="/tucuma" element={<Tucuma />} />
        <Route path="/farinha-mandioca" element={<FarinhaMandioca />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route
          path="/login"
          element={
            isLoggedIn
              ? <Navigate to="/" replace />
              : <Login onLogin={handleLogin} />
          }
        />
        <Route path="/mapa" element={<MapaLeaflet />} />
        <Route path="/adicionar-local" element={<AdicionarLocal />} />
        <Route
          path="/painel-adm"
          element={
            userType === 'ADM'
              ? <AdminPanel />
              : <Navigate to="/login" replace />
          }
        />
        <Route path="/sao-paulo" element={<SaoPaulo />} />
        <Route path="/monumentos-sao-paulo" element={<MonumentosSaoPaulo />} />
        <Route path="/rio-de-janeiro" element={<RioDeJaneiro />} />
        <Route path="/para" element={<Para />} />
        <Route path="/parapitu" element={<ParaPitu />} />
        <Route path="/destinos-para" element={<DestinosPara />} />
        <Route path="/rj-pontos" element={<RJPontos />} />
        <Route path="/ceara" element={<Ceara />} />
        <Route path="/ceara-pontos" element={<CearaPontos />} />
        <Route path="/sp-pontos" element={<SPPontos />} />
        <Route path="/destinos-amazonas" element={<DestinosAmazonas />} />
        <Route path="/amazonas-estado" element={<Amazonas />} />
        <Route path="/ceara/jericoacoara" element={<Jericoacoara />} />
        <Route path="/ceara/canoa-quebrada" element={<CanoaQuebrada />} />
        <Route path="/ceara/dragao-do-mar" element={<DragaoDoMar />} />
        <Route path="/ceara/beach-park" element={<BeachPark />} />
        <Route path="/ceara/praia-do-futuro" element={<PraiaDoFuturo />} />
        <Route path="/ceara/serra-de-baturite" element={<SerraDeBaturite />} />
        <Route path="/ceara/chapada-do-araripe" element={<ChapadaDoAraripe />} />
        <Route path="/ceara/centro-historico-fortaleza" element={<CentroHistoricoFortaleza />} />
        <Route path="/acre" element={<Acre />} />
        <Route path="/acre-pontos" element={<AcrePontos />} />
        <Route path="/acre/parque-chandless" element={<ParqueChandless />} />
        <Route path="/acre/centro-historico" element={<CentroHistoricoRioBranco />} />
        <Route path="/amapa" element={<Amapa />} />
        <Route path="/amapa-pontos" element={<AmapaPontos />} />
        <Route path="/amapa/fortaleza-sao-jose" element={<FortalezaSaoJoseMacapa />} />
        <Route path="/rondonia" element={<Rondonia />} />
        <Route path="/rondonia-pontos" element={<RondoniaPontos />} />
        <Route path="/rondonia/ferrovia-madeira-mamore" element={<FerroviaMadeiraMamore />} />
        <Route path="/roraima" element={<Roraima />} />
        <Route path="/roraima-pontos" element={<RoraimaPontos />} />
        <Route path="/roraima/monte-roraima" element={<MonteRoraima />} />
        <Route path="/tocantins" element={<Tocantins />} />
        <Route path="/tocantins-pontos" element={<TocantinsPontos />} />
        <Route path="/tocantins/jalapao" element={<Jalapao />} />
        <Route path="/minas-gerais" element={<MinasGerais />} />
        <Route path="/mg-pontos" element={<MGPontos />} />
        <Route path="/mg/ouro-preto" element={<OuroPreto />} />
        <Route path="/mg/inhotim" element={<Inhotim />} />
        <Route path="/espirito-santo" element={<EspiritoSanto />} />
        <Route path="/es-pontos" element={<ESPontos />} />
        <Route path="/es/pedra-azul" element={<PedraAzulES />} />
        <Route path="/es/guarapari" element={<Guarapari />} />

      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default Router;
