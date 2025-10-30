import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './components/pages/Index.tsx'
import './index.css'

console.log('App starting...');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)

console.log('App rendered');
