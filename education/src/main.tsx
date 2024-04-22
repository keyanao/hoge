import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './index.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     {/* <ChakraProvider> */}
      <AppRoutes />
     {/* </ChakraProvider> */}
  </React.StrictMode>,
)


