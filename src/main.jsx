import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from './components/ui/pages/Router/Router.jsx'
import TooltipContext from './components/ui/context/TooltipContext.jsx'

createRoot(document.getElementById('root')).render(
    <TooltipContext>
      <Router />
    </TooltipContext>
)
