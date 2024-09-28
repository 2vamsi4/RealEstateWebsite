import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Properties from './components/properties.jsx'
import ContactUs from './components/ContactUs.jsx'
import Products_page from './components/Products_page.jsx'
import ProjectDetails from './components/ListProperties.jsx'
import PropertyCard from './components/Home-Top_Selling_Projects.jsx'
import FeaturedProjectsCard from './components/Home-Top_Selling_Projects.jsx'
import Banner from './components/Home-Banner.jsx'
import Choose_Your_City from './components/Home-CYC.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
