import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Gun from './pages/Gun.jsx'
import About from './pages/About.jsx'
import API from './components/API.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <API />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gun/:id" element={<Gun />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
