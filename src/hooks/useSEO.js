import { useEffect } from 'react'

export function useSEO({ title, description, image } = {}) {
  useEffect(() => {
    const siteName = 'GADYS'
    const fullTitle = title ? `${title} | ${siteName}` : siteName

    document.title = fullTitle

    const setMeta = (selector, content) => {
      if (!content) return
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const attr = selector.includes('property') ? 'property' : 'name'
        const val = selector.match(/["']([^"']+)["']/)?.[1]
        if (val) el.setAttribute(attr, val)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', fullTitle)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:image"]', image)
    setMeta('meta[property="og:type"]', 'website')
    setMeta('meta[name="twitter:card"]', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', fullTitle)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[name="twitter:image"]', image)
  }, [title, description, image])
}
