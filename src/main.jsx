import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SpeedInsights />
    <Anayltics/>
  </StrictMode>,
)
