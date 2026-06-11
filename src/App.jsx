import { Routes, Route } from 'react-router-dom'
import ThemeProvider from './contexts/ThemeContext'
import LangProvider from './contexts/LangContext'
import Home from './pages/Home'
import Sender from './pages/Sender'
import Receiver from './pages/Receiver'

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sender" element={<Sender />} />
          <Route path="/receiver" element={<Receiver />} />
        </Routes>
      </LangProvider>
    </ThemeProvider>
  )
}
