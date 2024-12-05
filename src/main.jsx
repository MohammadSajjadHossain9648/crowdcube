import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import AuthProvider from './components/AuthProvider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider
      route={<RouterProvider router={router}></RouterProvider>}
    >
    </AuthProvider>
  </StrictMode>,
)
