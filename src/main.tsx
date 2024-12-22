import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StrictMode>
      <App />
  </StrictMode>
);