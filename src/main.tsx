import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StoreWrapper } from './providers/StoreProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreWrapper>
        <App />
    </StoreWrapper>
  </React.StrictMode>,
)
