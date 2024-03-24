import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ShopContentProvider from "@/context/ShopContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ShopContentProvider>
          <App />
      </ShopContentProvider>
  </React.StrictMode>,
)
