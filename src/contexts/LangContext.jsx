import { createContext, useContext, useState } from 'react'
import { translations } from '../locales'

const LangCtx = createContext()

export function useLang() {
  return useContext(LangCtx)
}

export default function LangProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('fic-lang') || 'uz'
  )

  const setLang = (l) => {
    setLangState(l)
    localStorage.setItem('fic-lang', l)
  }

  return (
    <LangCtx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangCtx.Provider>
  )
}
