import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('app')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
