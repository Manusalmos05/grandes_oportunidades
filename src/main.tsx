
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { TemaProvider } from './componets/tema'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </React.StrictMode>,
)