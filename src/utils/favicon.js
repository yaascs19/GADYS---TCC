// Utilitário para atualizar favicon
export const updateFavicon = () => {
  const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link')
  favicon.rel = 'icon'
  favicon.type = 'image/png'
  favicon.href = '/images/geral/logo-gadys.jpeg'
  if (!document.querySelector('link[rel="icon"]')) {
    document.head.appendChild(favicon)
  }
}