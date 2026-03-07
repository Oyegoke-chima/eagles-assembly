import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Give from './pages/Give'
import Prayer from './pages/Prayer'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/give" element={<Give />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
