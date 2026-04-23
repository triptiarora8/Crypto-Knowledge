import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavigationBar from './components/Header/NavigationBar.jsx'
import FooterCTA from './components/Footer/Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<NavigationBar/>
    <App />
    <div className='md:mt-50 mt-50'>
    <FooterCTA/>
    </div>
  </StrictMode>,
)
