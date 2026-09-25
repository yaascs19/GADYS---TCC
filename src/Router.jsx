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
const BuscarPage = lazy(() => import('./components/BuscarPage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

const PaoDeAcucar = lazy(() => import('./components/PaoDeAcucar'));
const CataratasIguacu = lazy(() => import('./components/CataratasIguacu'));
const Pelourinho = lazy(() => import('./components/Pelourinho'));
const FernandoNoronha = lazy(() => import('./components/FernandoNoronha'));
const Pantanal = lazy(() => import('./components/Pantanal'));

const Para = lazy(() => import('./components/Para'));
const DestinosPara = lazy(() => import('./components/DestinosPara'));
const RioDeJaneiro = lazy(() => import('./components/RioDeJaneiro'));
const RJPontos = lazy(() => import('./components/RJPontos'));
const SaoPaulo = lazy(() => import('./components/SaoPaulo'));
const SPPontos = lazy(() => import('./components/SPPontos'));
const Alagoas = lazy(() => import('./components/Alagoas'));
const AlagoapontosPontos = lazy(() => import('./components/AlagoapontosPontos'));
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
const ParqueZoobotanico = lazy(() => import('./components/norte/acre/ParqueZoobotanico'));
const MemorialChicoMendes = lazy(() => import('./components/norte/acre/MemorialChicoMendes'));
const ReservaExtrativistaChicoMendes = lazy(() => import('./components/norte/acre/ReservaExtrativistaChicoMendes'));
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
const Sergipe = lazy(() => import('./components/Sergipe'));
const SergipePontos = lazy(() => import('./components/SergipePontos'));
const CanionXingo = lazy(() => import('./components/sergipe/CanionXingo'));

const Piaui = lazy(() => import('./components/Piaui'));
const PiauiPontos = lazy(() => import('./components/PiauiPontos'));
const SerradaCapivara = lazy(() => import('./components/pi/SerradaCapivara'));
const DeltaDoParnaiba = lazy(() => import('./components/pi/DeltaDoParnaiba'));
const SeteCidades = lazy(() => import('./components/pi/SeteCidades'));
const LuisCorreia = lazy(() => import('./components/pi/LuisCorreia'));
const PedradoCastelo = lazy(() => import('./components/pi/PedradoCastelo'));
const TeresinaHistorico = lazy(() => import('./components/pi/TeresinaHistorico'));

const RioGrandeDoNorte = lazy(() => import('./components/RioGrandeDoNorte'));
const RioGrandeDoNortePontos = lazy(() => import('./components/RioGrandeDoNortePontos'));
const Genipabu = lazy(() => import('./components/rn/Genipabu'));
const Pipa = lazy(() => import('./components/rn/Pipa'));
const Maracajau = lazy(() => import('./components/rn/Maracajau'));
const ParqueDasDunas = lazy(() => import('./components/rn/ParqueDasDunas'));
const ForteReisMagos = lazy(() => import('./components/rn/ForteReisMagos'));
const BaiaFormosa = lazy(() => import('./components/rn/BaiaFormosa'));

const RioGrandeDoSul = lazy(() => import('./components/RioGrandeDoSul'));
const RioGrandeSulPontos = lazy(() => import('./components/RioGrandeSulPontos'));
const Gramado = lazy(() => import('./components/rs/Gramado'));
const CanionItaimbezinho = lazy(() => import('./components/rs/CanionItaimbezinho'));
const BentoGoncalves = lazy(() => import('./components/rs/BentoGoncalves'));
const PortoAlegre = lazy(() => import('./components/rs/PortoAlegre'));
const Torres = lazy(() => import('./components/rs/Torres'));
const SaoMiguelDasMissoes = lazy(() => import('./components/rs/SaoMiguelDasMissoes'));

const Paraiba = lazy(() => import('./components/Paraiba'));
const ParaibaPontos = lazy(() => import('./components/ParaibaPontos'));
const CaboBranco = lazy(() => import('./components/pb/CaboBranco'));
const PraiaDeTambaba = lazy(() => import('./components/pb/PraiaDeTambaba'));
const PraiaDeCoqueirinho = lazy(() => import('./components/pb/PraiaDeCoqueirinho'));
const CentroHistoricoJoaoPessoa = lazy(() => import('./components/pb/CentroHistoricoJoaoPessoa'));
const LagoadGuaribas = lazy(() => import('./components/pb/LagoadGuaribas'));
const AreiaBrejo = lazy(() => import('./components/pb/AreiaBrejo'));

const Parana = lazy(() => import('./components/Parana'));
const ParanaPontos = lazy(() => import('./components/ParanaPontos'));
const CataratasDoIguacu = lazy(() => import('./components/pr/CataratasDoIguacu'));
const CuritibaHistorico = lazy(() => import('./components/pr/CuritibaHistorico'));
const IlhaDoMel = lazy(() => import('./components/pr/IlhaDoMel'));
const VilaVelha = lazy(() => import('./components/pr/VilaVelha'));
const FozDoIguacu = lazy(() => import('./components/pr/FozDoIguacu'));
const Guaratuba = lazy(() => import('./components/pr/Guaratuba'));

const Pernambuco = lazy(() => import('./components/Pernambuco'));
const PernambucoPontos = lazy(() => import('./components/PernambucoPontos'));
const FernandoDeNoronha = lazy(() => import('./components/pe/FernandoDeNoronha'));
const PortoDeGalinhas = lazy(() => import('./components/pe/PortoDeGalinhas'));
const RecifeAntigo = lazy(() => import('./components/pe/RecifeAntigo'));
const Olinda = lazy(() => import('./components/pe/Olinda'));
const ValeDoCatimbau = lazy(() => import('./components/pe/ValeDoCatimbau'));
const Caruaru = lazy(() => import('./components/pe/Caruaru'));

const SantaCatarina = lazy(() => import('./components/SantaCatarina'));
const SantaCatarinaPontos = lazy(() => import('./components/SantaCatarinaPontos'));
const Florianopolis = lazy(() => import('./components/sc/Florianopolis'));
const BalnearioCamboriu = lazy(() => import('./components/sc/BalnearioCamboriu'));
const Bombinhas = lazy(() => import('./components/sc/Bombinhas'));
const Blumenau = lazy(() => import('./components/sc/Blumenau'));
const SaoJoaquim = lazy(() => import('./components/sc/SaoJoaquim'));
const Joinville = lazy(() => import('./components/sc/Joinville'));

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

          <Route path="/pao-de-acucar" element={<Suspense fallback={<PageLoader />}><PaoDeAcucar /></Suspense>} />
          <Route path="/cataratas-iguacu" element={<Suspense fallback={<PageLoader />}><CataratasIguacu /></Suspense>} />
          <Route path="/pelourinho" element={<Suspense fallback={<PageLoader />}><Pelourinho /></Suspense>} />
          <Route path="/fernando-noronha" element={<Suspense fallback={<PageLoader />}><FernandoNoronha /></Suspense>} />
          <Route path="/pantanal" element={<Suspense fallback={<PageLoader />}><Pantanal /></Suspense>} />

          <Route path="/para" element={<Suspense fallback={<PageLoader />}><Para /></Suspense>} />
          <Route path="/destinos-para" element={<Suspense fallback={<PageLoader />}><DestinosPara /></Suspense>} />
          <Route path="/rio-de-janeiro" element={<Suspense fallback={<PageLoader />}><RioDeJaneiro /></Suspense>} />
          <Route path="/rj-pontos" element={<Suspense fallback={<PageLoader />}><RJPontos /></Suspense>} />
          <Route path="/sao-paulo" element={<Suspense fallback={<PageLoader />}><SaoPaulo /></Suspense>} />
          <Route path="/sp-pontos" element={<Suspense fallback={<PageLoader />}><SPPontos /></Suspense>} />
          <Route path="/alagoas" element={<Suspense fallback={<PageLoader />}><Alagoas /></Suspense>} />
          <Route path="/alagoas-pontos" element={<Suspense fallback={<PageLoader />}><AlagoapontosPontos /></Suspense>} />
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
          <Route path="/acre/parque-zoobotanico" element={<Suspense fallback={<PageLoader />}><ParqueZoobotanico /></Suspense>} />
          <Route path="/acre/memorial-chico-mendes" element={<Suspense fallback={<PageLoader />}><MemorialChicoMendes /></Suspense>} />
          <Route path="/acre/reserva-extrativista-chico-mendes" element={<Suspense fallback={<PageLoader />}><ReservaExtrativistaChicoMendes /></Suspense>} />
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
          <Route path="/sergipe" element={<Suspense fallback={<PageLoader />}><Sergipe /></Suspense>} />
          <Route path="/sergipe-pontos" element={<Suspense fallback={<PageLoader />}><SergipePontos /></Suspense>} />
          <Route path="/sergipe/canion-xingo" element={<Suspense fallback={<PageLoader />}><CanionXingo /></Suspense>} />

          <Route path="/piaui" element={<Suspense fallback={<PageLoader />}><Piaui /></Suspense>} />
          <Route path="/pi-pontos" element={<Suspense fallback={<PageLoader />}><PiauiPontos /></Suspense>} />
          <Route path="/pi/serra-da-capivara" element={<Suspense fallback={<PageLoader />}><SerradaCapivara /></Suspense>} />
          <Route path="/pi/delta-do-parnaiba" element={<Suspense fallback={<PageLoader />}><DeltaDoParnaiba /></Suspense>} />
          <Route path="/pi/sete-cidades" element={<Suspense fallback={<PageLoader />}><SeteCidades /></Suspense>} />
          <Route path="/pi/luis-correia" element={<Suspense fallback={<PageLoader />}><LuisCorreia /></Suspense>} />
          <Route path="/pi/pedra-do-castelo" element={<Suspense fallback={<PageLoader />}><PedradoCastelo /></Suspense>} />
          <Route path="/pi/teresina-centro" element={<Suspense fallback={<PageLoader />}><TeresinaHistorico /></Suspense>} />

          <Route path="/rio-grande-do-norte" element={<Suspense fallback={<PageLoader />}><RioGrandeDoNorte /></Suspense>} />
          <Route path="/rn-pontos" element={<Suspense fallback={<PageLoader />}><RioGrandeDoNortePontos /></Suspense>} />
          <Route path="/rn/genipabu" element={<Suspense fallback={<PageLoader />}><Genipabu /></Suspense>} />
          <Route path="/rn/pipa" element={<Suspense fallback={<PageLoader />}><Pipa /></Suspense>} />
          <Route path="/rn/maracajau" element={<Suspense fallback={<PageLoader />}><Maracajau /></Suspense>} />
          <Route path="/rn/parque-das-dunas" element={<Suspense fallback={<PageLoader />}><ParqueDasDunas /></Suspense>} />
          <Route path="/rn/forte-dos-reis-magos" element={<Suspense fallback={<PageLoader />}><ForteReisMagos /></Suspense>} />
          <Route path="/rn/baia-formosa" element={<Suspense fallback={<PageLoader />}><BaiaFormosa /></Suspense>} />

          <Route path="/rio-grande-do-sul" element={<Suspense fallback={<PageLoader />}><RioGrandeDoSul /></Suspense>} />
          <Route path="/rs-pontos" element={<Suspense fallback={<PageLoader />}><RioGrandeSulPontos /></Suspense>} />
          <Route path="/rs/gramado" element={<Suspense fallback={<PageLoader />}><Gramado /></Suspense>} />
          <Route path="/rs/canion-itaimbezinho" element={<Suspense fallback={<PageLoader />}><CanionItaimbezinho /></Suspense>} />
          <Route path="/rs/bento-goncalves" element={<Suspense fallback={<PageLoader />}><BentoGoncalves /></Suspense>} />
          <Route path="/rs/porto-alegre" element={<Suspense fallback={<PageLoader />}><PortoAlegre /></Suspense>} />
          <Route path="/rs/torres" element={<Suspense fallback={<PageLoader />}><Torres /></Suspense>} />
          <Route path="/rs/sao-miguel-das-missoes" element={<Suspense fallback={<PageLoader />}><SaoMiguelDasMissoes /></Suspense>} />

          <Route path="/paraiba" element={<Suspense fallback={<PageLoader />}><Paraiba /></Suspense>} />
          <Route path="/pb-pontos" element={<Suspense fallback={<PageLoader />}><ParaibaPontos /></Suspense>} />
          <Route path="/pb/cabo-branco" element={<Suspense fallback={<PageLoader />}><CaboBranco /></Suspense>} />
          <Route path="/pb/praia-de-tambaba" element={<Suspense fallback={<PageLoader />}><PraiaDeTambaba /></Suspense>} />
          <Route path="/pb/praia-de-coqueirinho" element={<Suspense fallback={<PageLoader />}><PraiaDeCoqueirinho /></Suspense>} />
          <Route path="/pb/centro-historico-joao-pessoa" element={<Suspense fallback={<PageLoader />}><CentroHistoricoJoaoPessoa /></Suspense>} />
          <Route path="/pb/lagoa-de-guaribas" element={<Suspense fallback={<PageLoader />}><LagoadGuaribas /></Suspense>} />
          <Route path="/pb/areia-centro" element={<Suspense fallback={<PageLoader />}><AreiaBrejo /></Suspense>} />

          <Route path="/parana" element={<Suspense fallback={<PageLoader />}><Parana /></Suspense>} />
          <Route path="/pr-pontos" element={<Suspense fallback={<PageLoader />}><ParanaPontos /></Suspense>} />
          <Route path="/pr/cataratas-do-iguacu" element={<Suspense fallback={<PageLoader />}><CataratasDoIguacu /></Suspense>} />
          <Route path="/pr/curitiba-centro" element={<Suspense fallback={<PageLoader />}><CuritibaHistorico /></Suspense>} />
          <Route path="/pr/ilha-do-mel" element={<Suspense fallback={<PageLoader />}><IlhaDoMel /></Suspense>} />
          <Route path="/pr/vila-velha" element={<Suspense fallback={<PageLoader />}><VilaVelha /></Suspense>} />
          <Route path="/pr/foz-do-iguacu" element={<Suspense fallback={<PageLoader />}><FozDoIguacu /></Suspense>} />
          <Route path="/pr/guaratuba" element={<Suspense fallback={<PageLoader />}><Guaratuba /></Suspense>} />

          <Route path="/pernambuco" element={<Suspense fallback={<PageLoader />}><Pernambuco /></Suspense>} />
          <Route path="/pe-pontos" element={<Suspense fallback={<PageLoader />}><PernambucoPontos /></Suspense>} />
          <Route path="/pe/fernando-de-noronha" element={<Suspense fallback={<PageLoader />}><FernandoDeNoronha /></Suspense>} />
          <Route path="/pe/porto-de-galinhas" element={<Suspense fallback={<PageLoader />}><PortoDeGalinhas /></Suspense>} />
          <Route path="/pe/recife-antigo" element={<Suspense fallback={<PageLoader />}><RecifeAntigo /></Suspense>} />
          <Route path="/pe/olinda" element={<Suspense fallback={<PageLoader />}><Olinda /></Suspense>} />
          <Route path="/pe/vale-do-catimbau" element={<Suspense fallback={<PageLoader />}><ValeDoCatimbau /></Suspense>} />
          <Route path="/pe/caruaru" element={<Suspense fallback={<PageLoader />}><Caruaru /></Suspense>} />

          <Route path="/santa-catarina" element={<Suspense fallback={<PageLoader />}><SantaCatarina /></Suspense>} />
          <Route path="/sc-pontos" element={<Suspense fallback={<PageLoader />}><SantaCatarinaPontos /></Suspense>} />
          <Route path="/sc/florianopolis" element={<Suspense fallback={<PageLoader />}><Florianopolis /></Suspense>} />
          <Route path="/sc/balneario-camboriu" element={<Suspense fallback={<PageLoader />}><BalnearioCamboriu /></Suspense>} />
          <Route path="/sc/bombinhas" element={<Suspense fallback={<PageLoader />}><Bombinhas /></Suspense>} />
          <Route path="/sc/blumenau" element={<Suspense fallback={<PageLoader />}><Blumenau /></Suspense>} />
          <Route path="/sc/sao-joaquim" element={<Suspense fallback={<PageLoader />}><SaoJoaquim /></Suspense>} />
          <Route path="/sc/joinville" element={<Suspense fallback={<PageLoader />}><Joinville /></Suspense>} />
          <Route path="/buscar" element={<Suspense fallback={<PageLoader />}><BuscarPage /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    </GoogleOAuthProvider>
  );
}

export default Router;
