import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import './18n.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense fallback={<div>Lading...</div>} >
        <App />
      </Suspense>
    </React.StrictMode>,
  </BrowserRouter>
)
