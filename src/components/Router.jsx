import { useState, useEffect } from 'react'
import App from '../App'
import Home from './Home'
import Amazonas from './Amazonas'
import Lugares from './Lugares'
import SobrePage from './SobrePage'
import ContatoPage from './ContatoPage'
import Para from './Para'
import ParaPontos from './ParaPontos'
import ParaPitu from './ParaPitu'
import RioDeJaneiro from './RioDeJaneiro'
import RJPontos from './RJPontos'

function Router() {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    const path = window.location.pathname
    const hash = window.location.hash
    
    if (path.includes('rj-pontos')) {
      setCurrentPage('rj-pontos')
    } else if (path.includes('rio-de-janeiro')) {
        setCurrentPage('rio-de-janeiro')
    } else if (path.includes('para-pontos')) {
      setCurrentPage('para-pontos')
    } else if (path.includes('para-pitu')) {
      setCurrentPage('para-pitu')
    } else if (path.includes('home') || hash.includes('home')) {
      setCurrentPage('welcome')
    } else if (path.includes('amazonas') || hash.includes('amazonas')) {
      setCurrentPage('amazonas')
    } else if (path.includes('lugares') || hash.includes('lugares')) {
      setCurrentPage('lugares')
    } else if (path.includes('sobre') || hash.includes('sobre')) {
      setCurrentPage('sobre')
    } else if (path.includes('contato') || hash.includes('contato')) {
      setCurrentPage('contato')
    } else if (path.includes('para')) {
      setCurrentPage('para')
    } else {
      setCurrentPage('app')
    }
  }, [])

  console.log('Rendering page:', currentPage)
  
  switch (currentPage) {
    case 'welcome':
      return <Home />
    case 'amazonas':
      return <Amazonas />
    case 'lugares':
      return <Lugares />
    case 'sobre':
      return <SobrePage />
    case 'contato':
      return <ContatoPage />
    case 'para':
      return <Para />
    case 'para-pontos': 
      return <ParaPontos />
    case 'para-pitu':
      return <ParaPitu />
    case 'rio-de-janeiro':
        return <RioDeJaneiro />
    case 'rj-pontos':
        return <RJPontos />
    default:
      return <App />
  }
}

export default Router