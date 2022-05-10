import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../src/styles/theme'

import App from './App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TouristRoutes from './pages/TouristRoutes'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="tourist-routes" element={<TouristRoutes />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
