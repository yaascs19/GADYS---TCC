import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LanguageProvider } from './context/LanguageContext';
import useImagePreload from './hooks/useImagePreload';
import TranslateButton from './components/TranslateButton';
import Chatbot from './components/Chatbot';

const HomePage = lazy(() => import('./components/HomePage'));
const SobrePage = lazy(() => import('./components/SobrePage'));
const LugaresPage = lazy(() => import('./components/LugaresPage'));
const PerfilPage = lazy(() => import('./components/PerfilPage'));
const ContatoPage = lazy(() => import('./components/ContatoPage'));
const Login = lazy(() => import('./Login'));
const RedefinirSenha = lazy(() => import('./RedefinirSenha'));
const MapaLeaflet = lazy(() => import('./components/MapaLeaflet'));
const AdicionarLocal = lazy(() => import('./components/AdicionarLocal'));
const AdminPanel = lazy(() => import('./AdminPanel'));
const LocalDetalhe = lazy(() => import('./components/LocalDetalhe'));
const EditarLocal = lazy(() => import('./components/EditarLocal'));

const Para = lazy(() => import('./components/Para'));
const DestinosPara = lazy(() => import('./components/DestinosPara'));
const RioDeJaneiro = lazy(() => import('./components/RioDeJaneiro'));
const RJPontos = lazy(() => import('./components/RJPontos'));
const SaoPaulo = lazy(() => import('./components/SaoPaulo'));
const SPPontos = lazy(() => import('./components/SPPontos'));
const Ceara = lazy(() => import('./components/Ceara'));
const CearaPontos = lazy(() => import('./components/CearaPontos'));
const Amazonas = lazy(() => import('./components/Amazonas'));
const DestinosAmazonas = lazy(() => import('./components/DestinosAmazonas'));
const EncontroAguas = lazy(() => import('./components/EncontroAguas'));
const TeatroAmazonas = lazy(() => import('./components/TeatroAmazonas'));
const AmazonicoPeixaria = lazy(() => import('./components/AmazonicoPeixaria'));
const ArquipelagoAnavilhanas = lazy(() => import('./components/ArquipelagoAnavilhanas'));
const Bumbodromo = lazy(() => import('./components/Bumbodromo'));
const CachoeiraSantuario = lazy(() => import('./components/CachoeiraSantuario'));
const CoretoPeixaria = lazy(() => import('./components/CoretoPeixaria'));
const PonteRioNegro = lazy(() => import('./components/PonteRioNegro'));

const Acre = lazy(() => import('./components/Acre'));
const AcrePontos = lazy(() => import('./components/AcrePontos'));
const Amapa = lazy(() => import('./components/Amapa'));
const AmapaPontos = lazy(() => import('./components/AmapaPontos'));
const Rondonia = lazy(() => import('./components/Rondonia'));
const RondoniaPontos = lazy(() => import('./components/RondoniaPontos'));
const Roraima = lazy(() => import('./components/Roraima'));
const RoraimaPontos = lazy(() => import('./components/RoraimaPontos'));
const Tocantins = lazy(() => import('./components/Tocantins'));
const TocantinsPontos = lazy(() => import('./components/TocantinsPontos'));

const ParqueChandless = lazy(() => import('./components/norte/acre/ParqueChandless'));
const CentroHistoricoRioBranco = lazy(() => import('./components/norte/acre/CentroHistoricoRioBranco'));
const FortalezaSaoJoseMacapa = lazy(() => import('./components/norte/amapa/FortalezaSaoJoseMacapa'));
const FerroviaMadeiraMamore = lazy(() => import('./components/norte/rondonia/FerroviaMadeiraMamore'));
const MonteRoraima = lazy(() => import('./components/norte/roraima/MonteRoraima'));
const Jalapao = lazy(() => import('./components/norte/tocantins/Jalapao'));

const Jericoacoara = lazy(() => import('./components/ceara/Jericoacoara'));
const CanoaQuebrada = lazy(() => import('./components/ceara/CanoaQuebrada'));
const DragaoDoMar = lazy(() => import('./components/ceara/DragaoDoMar'));
const BeachPark = lazy(() => import('./components/ceara/BeachPark'));
const PraiaDoFuturo = lazy(() => import('./components/ceara/PraiaDoFuturo'));
const SerraDeBaturite = lazy(() => import('./components/ceara/SerraDeBaturite'));
const ChapadaDoAraripe = lazy(() => import('./components/ceara/ChapadaDoAraripe'));
const CentroHistoricoFortaleza = lazy(() => import('./components/ceara/CentroHistoricoFortaleza'));

const MinasGerais = lazy(() => import('./components/MinasGerais'));
const MGPontos = lazy(() => import('./components/MGPontos'));
const EspiritoSanto = lazy(() => import('./components/EspiritoSanto'));
const ESPontos = lazy(() => import('./components/ESPontos'));
const OuroPreto = lazy(() => import('./components/sudeste/mg/OuroPreto'));
const Inhotim = lazy(() => import('./components/sudeste/mg/Inhotim'));
const PedraAzulES = lazy(() => import('./components/sudeste/es/PedraAzulES'));
const Guarapari = lazy(() => import('./components/sudeste/es/Guarapari'));

const ROUTE_IMAGES = {
  '/': ['/images/geral/amazonas1.avif', '/sp.jpg', '/rj.jpeg'],
  '/sao-paulo': ['/sp.jpg', '/images/monumentos/copan.webp'],
  '/sp-pontos': ['/images/monumentos/copan.webp', '/images/monumentos/mercadaosp.jpg'],
  '/rio-de-janeiro': ['/rj.jpeg', '/images/monumentos/cristo.webp'],
  '/rj-pontos': ['/images/monumentos/cristo.webp', '/images/geral/cr-rj.webp'],
  '/amazonas': ['/images/geral/amazonas1.avif', '/images/geral/eam.jpg'],
  '/ceara': ['/images/geral/CearaInicio.jpg'],
};

const PageLoader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0d1117' }}>
    <div style={{ width: 40, height: 40, border: '3px solid rgba(56,189,248,0.2)', borderTop: '3px solid #38BDF8', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
  </div>
);

function ImagePreloader() {
  const { pathname } = useLocation();
  useEffect(() => {
    const images = ROUTE_IMAGES[pathname];
    if (images) images.forEach(src => { new Image().src = src; });
  }, [pathname]);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function checkSession() {
  const expiry = localStorage.getItem('loginExpiry')
  if (expiry && Date.now() > Number(expiry)) {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userType')
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('usuarioId')
    localStorage.removeItem('loginExpiry')
  }
}

function AdminRoute({ children }) {
  checkSession()
  const isAdmin = (localStorage.getItem('userType') || '').toUpperCase() === 'ADM'
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  if (!isLoggedIn || !isAdmin) return <Navigate to="/login" replace />
  return children
}

function Router() {
  useImagePreload(['/rj.jpeg', '/images/geral/amazonas1.avif', '/sp.jpg', '/images/monumentos/copan.webp', '/images/geral/CearaInicio.jpg']);

  useEffect(() => { checkSession() }, []);

  return (
    <GoogleOAuthProvider clientId="718473050325-48u7v2l4msc6mv99tj220gvfk3t8a9sl.apps.googleusercontent.com">
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ImagePreloader />
        <TranslateButton />
        <Chatbot darkMode={typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'true'} />
        <Routes>
          <Route path="/" element={<Suspense fallback={<PageLoader />}><HomePage /></Suspense>} />
          <Route path="/sobre" element={<Suspense fallback={<PageLoader />}><SobrePage /></Suspense>} />
          <Route path="/lugares" element={<Suspense fallback={<PageLoader />}><LugaresPage /></Suspense>} />
          <Route path="/perfil" element={<Suspense fallback={<PageLoader />}><PerfilPage /></Suspense>} />
          <Route path="/contato" element={<Suspense fallback={<PageLoader />}><ContatoPage /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<PageLoader />}><Login /></Suspense>} />
          <Route path="/redefinir-senha" element={<Suspense fallback={<PageLoader />}><RedefinirSenha /></Suspense>} />
          <Route path="/mapa" element={<Suspense fallback={<PageLoader />}><MapaLeaflet /></Suspense>} />
          <Route path="/adicionar-local" element={<Suspense fallback={<PageLoader />}><AdicionarLocal /></Suspense>} />
          <Route path="/painel-adm" element={<AdminRoute><Suspense fallback={<PageLoader />}><AdminPanel /></Suspense></AdminRoute>} />
          <Route path="/admin/editar-local/:id" element={<AdminRoute><Suspense fallback={<PageLoader />}><EditarLocal /></Suspense></AdminRoute>} />
          <Route path="/local/:id" element={<Suspense fallback={<PageLoader />}><LocalDetalhe /></Suspense>} />

          <Route path="/para" element={<Suspense fallback={<PageLoader />}><Para /></Suspense>} />
          <Route path="/destinos-para" element={<Suspense fallback={<PageLoader />}><DestinosPara /></Suspense>} />
          <Route path="/rio-de-janeiro" element={<Suspense fallback={<PageLoader />}><RioDeJaneiro /></Suspense>} />
          <Route path="/rj-pontos" element={<Suspense fallback={<PageLoader />}><RJPontos /></Suspense>} />
          <Route path="/sao-paulo" element={<Suspense fallback={<PageLoader />}><SaoPaulo /></Suspense>} />
          <Route path="/sp-pontos" element={<Suspense fallback={<PageLoader />}><SPPontos /></Suspense>} />
          <Route path="/ceara" element={<Suspense fallback={<PageLoader />}><Ceara /></Suspense>} />
          <Route path="/ceara-pontos" element={<Suspense fallback={<PageLoader />}><CearaPontos /></Suspense>} />
          <Route path="/amazonas" element={<Suspense fallback={<PageLoader />}><Amazonas /></Suspense>} />
          <Route path="/amazonas-estado" element={<Suspense fallback={<PageLoader />}><Amazonas /></Suspense>} />
          <Route path="/destinos-amazonas" element={<Suspense fallback={<PageLoader />}><DestinosAmazonas /></Suspense>} />
          <Route path="/encontro-aguas" element={<Suspense fallback={<PageLoader />}><EncontroAguas /></Suspense>} />
          <Route path="/teatro-amazonas" element={<Suspense fallback={<PageLoader />}><TeatroAmazonas /></Suspense>} />
          <Route path="/amazonico-peixaria" element={<Suspense fallback={<PageLoader />}><AmazonicoPeixaria /></Suspense>} />
          <Route path="/arquipelago-anavilhanas" element={<Suspense fallback={<PageLoader />}><ArquipelagoAnavilhanas /></Suspense>} />
          <Route path="/bumbodromo" element={<Suspense fallback={<PageLoader />}><Bumbodromo /></Suspense>} />
          <Route path="/cachoeira-santuario" element={<Suspense fallback={<PageLoader />}><CachoeiraSantuario /></Suspense>} />
          <Route path="/coreto-peixaria" element={<Suspense fallback={<PageLoader />}><CoretoPeixaria /></Suspense>} />
          <Route path="/ponte-rio-negro" element={<Suspense fallback={<PageLoader />}><PonteRioNegro /></Suspense>} />

          <Route path="/ceara/jericoacoara" element={<Suspense fallback={<PageLoader />}><Jericoacoara /></Suspense>} />
          <Route path="/ceara/canoa-quebrada" element={<Suspense fallback={<PageLoader />}><CanoaQuebrada /></Suspense>} />
          <Route path="/ceara/dragao-do-mar" element={<Suspense fallback={<PageLoader />}><DragaoDoMar /></Suspense>} />
          <Route path="/ceara/beach-park" element={<Suspense fallback={<PageLoader />}><BeachPark /></Suspense>} />
          <Route path="/ceara/praia-do-futuro" element={<Suspense fallback={<PageLoader />}><PraiaDoFuturo /></Suspense>} />
          <Route path="/ceara/serra-de-baturite" element={<Suspense fallback={<PageLoader />}><SerraDeBaturite /></Suspense>} />
          <Route path="/ceara/chapada-do-araripe" element={<Suspense fallback={<PageLoader />}><ChapadaDoAraripe /></Suspense>} />
          <Route path="/ceara/centro-historico-fortaleza" element={<Suspense fallback={<PageLoader />}><CentroHistoricoFortaleza /></Suspense>} />

          <Route path="/acre" element={<Suspense fallback={<PageLoader />}><Acre /></Suspense>} />
          <Route path="/acre-pontos" element={<Suspense fallback={<PageLoader />}><AcrePontos /></Suspense>} />
          <Route path="/acre/parque-chandless" element={<Suspense fallback={<PageLoader />}><ParqueChandless /></Suspense>} />
          <Route path="/acre/centro-historico" element={<Suspense fallback={<PageLoader />}><CentroHistoricoRioBranco /></Suspense>} />
          <Route path="/amapa" element={<Suspense fallback={<PageLoader />}><Amapa /></Suspense>} />
          <Route path="/amapa-pontos" element={<Suspense fallback={<PageLoader />}><AmapaPontos /></Suspense>} />
          <Route path="/amapa/fortaleza-sao-jose" element={<Suspense fallback={<PageLoader />}><FortalezaSaoJoseMacapa /></Suspense>} />
          <Route path="/rondonia" element={<Suspense fallback={<PageLoader />}><Rondonia /></Suspense>} />
          <Route path="/rondonia-pontos" element={<Suspense fallback={<PageLoader />}><RondoniaPontos /></Suspense>} />
          <Route path="/rondonia/ferrovia-madeira-mamore" element={<Suspense fallback={<PageLoader />}><FerroviaMadeiraMamore /></Suspense>} />
          <Route path="/roraima" element={<Suspense fallback={<PageLoader />}><Roraima /></Suspense>} />
          <Route path="/roraima-pontos" element={<Suspense fallback={<PageLoader />}><RoraimaPontos /></Suspense>} />
          <Route path="/roraima/monte-roraima" element={<Suspense fallback={<PageLoader />}><MonteRoraima /></Suspense>} />
          <Route path="/tocantins" element={<Suspense fallback={<PageLoader />}><Tocantins /></Suspense>} />
          <Route path="/tocantins-pontos" element={<Suspense fallback={<PageLoader />}><TocantinsPontos /></Suspense>} />
          <Route path="/tocantins/jalapao" element={<Suspense fallback={<PageLoader />}><Jalapao /></Suspense>} />

          <Route path="/minas-gerais" element={<Suspense fallback={<PageLoader />}><MinasGerais /></Suspense>} />
          <Route path="/mg-pontos" element={<Suspense fallback={<PageLoader />}><MGPontos /></Suspense>} />
          <Route path="/mg/ouro-preto" element={<Suspense fallback={<PageLoader />}><OuroPreto /></Suspense>} />
          <Route path="/mg/inhotim" element={<Suspense fallback={<PageLoader />}><Inhotim /></Suspense>} />
          <Route path="/espirito-santo" element={<Suspense fallback={<PageLoader />}><EspiritoSanto /></Suspense>} />
          <Route path="/es-pontos" element={<Suspense fallback={<PageLoader />}><ESPontos /></Suspense>} />
          <Route path="/es/pedra-azul" element={<Suspense fallback={<PageLoader />}><PedraAzulES /></Suspense>} />
          <Route path="/es/guarapari" element={<Suspense fallback={<PageLoader />}><Guarapari /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    </GoogleOAuthProvider>
  );
}

export default Router;
