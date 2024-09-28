
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Our_story from './components/Our_story'
import Home_loan from './components/Home_loan'
import Investors_corner from './components/Investors_corner'
import Blog from './components/Blog'
import Products_page from './components/Products_page'
import Properties from './components/properties'
function App() {
  return (
    <>
     <Router>
      <div className="App">
        <Navbar />
        <div className="content-routing">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Our_story" element={<Our_story />} />
            <Route path="/Home_loan" element={<Home_loan />} />
            <Route path="/Investors_corner" element={<Investors_corner />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/product" element={<Products_page />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
