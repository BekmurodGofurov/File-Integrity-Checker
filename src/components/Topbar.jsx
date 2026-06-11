import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LangContext'
import { ShieldCheckIcon, SunIcon, MoonIcon } from './Icons'

const LANGS = ['uz', 'en', 'ru']

export default function Topbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLang()

  return (
    <header className="topbar">
      <Link to="/" className="topbar-brand">
        <span className="topbar-logo">
          <ShieldCheckIcon size={20} />
        </span>
        <span className="topbar-name">{t.appName}</span>
      </Link>

      <div className="topbar-right">
        {/* Language switcher */}
        <div className="lang-switcher">
          {LANGS.map(l => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? 'active' : ''}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </button>
      </div>
    </header>
  )
}
