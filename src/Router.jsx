import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import useImagePreload from './hooks/useImagePreload';
import HomePage from './components/HomePage';
import SobrePage from './components/SobrePage';
import LugaresPage from './components/LugaresPage';
import PerfilPage from './components/PerfilPage';
import ContatoPage from './components/ContatoPage';
import Login from './Login';
import MapaLeaflet from './components/MapaLeaflet';
import AdicionarLocal from './components/AdicionarLocal';
import AdminPanel from './AdminPanel';
import TranslateButton from './components/TranslateButton';

import LocalDetalhe from './components/LocalDetalhe';

import Para from './components/Para';
import DestinosPara from './components/DestinosPara';
import RioDeJaneiro from './components/RioDeJaneiro';
import RJPontos from './components/RJPontos';
import SaoPaulo from './components/SaoPaulo';
import SPPontos from './components/SPPontos';
import Ceara from './components/Ceara';
import CearaPontos from './components/CearaPontos';
import Amazonas from './components/Amazonas';
import DestinosAmazonas from './components/DestinosAmazonas';
import EncontroAguas from './components/EncontroAguas';
import TeatroAmazonas from './components/TeatroAmazonas';
import AmazonicoPeixaria from './components/AmazonicoPeixaria';
import ArquipelagoAnavilhanas from './components/ArquipelagoAnavilhanas';

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

import Jericoacoara from './components/ceara/Jericoacoara';
import CanoaQuebrada from './components/ceara/CanoaQuebrada';
import DragaoDoMar from './components/ceara/DragaoDoMar';
import BeachPark from './components/ceara/BeachPark';
import PraiaDoFuturo from './components/ceara/PraiaDoFuturo';
import SerraDeBaturite from './components/ceara/SerraDeBaturite';
import ChapadaDoAraripe from './components/ceara/ChapadaDoAraripe';
import CentroHistoricoFortaleza from './components/ceara/CentroHistoricoFortaleza';

import MinasGerais from './components/MinasGerais';
import MGPontos from './components/MGPontos';
import EspiritoSanto from './components/EspiritoSanto';
import ESPontos from './components/ESPontos';
import OuroPreto from './components/sudeste/mg/OuroPreto';
import Inhotim from './components/sudeste/mg/Inhotim';
import PedraAzulES from './components/sudeste/es/PedraAzulES';
import Guarapari from './components/sudeste/es/Guarapari';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Router() {
  useImagePreload(['/rj.jpeg', '/ama.jpg', '/sp.jpg']);

  useEffect(() => {
    const adminUser = {
      email: 'yasmincunegundes25@gmail.com',
      password: 'Cun*1925',
      userType: 'adm',
      userName: 'Yasmin Admin',
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (!users.find(u => u.email === adminUser.email)) {
      users.push(adminUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <TranslateButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/lugares" element={<LugaresPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mapa" element={<MapaLeaflet />} />
          <Route path="/adicionar-local" element={<AdicionarLocal />} />
          <Route path="/painel-adm" element={<AdminPanel />} />

          <Route path="/local/:id" element={<LocalDetalhe />} />

          <Route path="/para" element={<Para />} />
          <Route path="/destinos-para" element={<DestinosPara />} />
          <Route path="/rio-de-janeiro" element={<RioDeJaneiro />} />
          <Route path="/rj-pontos" element={<RJPontos />} />
          <Route path="/sao-paulo" element={<SaoPaulo />} />
          <Route path="/sp-pontos" element={<SPPontos />} />
          <Route path="/ceara" element={<Ceara />} />
          <Route path="/ceara-pontos" element={<CearaPontos />} />
          <Route path="/amazonas" element={<Amazonas />} />
          <Route path="/amazonas-estado" element={<Amazonas />} />
          <Route path="/destinos-amazonas" element={<DestinosAmazonas />} />
          <Route path="/encontro-aguas" element={<EncontroAguas />} />
          <Route path="/teatro-amazonas" element={<TeatroAmazonas />} />
          <Route path="/amazonico-peixaria" element={<AmazonicoPeixaria />} />
          <Route path="/arquipelago-anavilhanas" element={<ArquipelagoAnavilhanas />} />

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
