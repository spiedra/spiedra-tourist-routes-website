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
import TouristRouteDescription from './pages/TouristRouteDescription'
import SiteMap from './pages/SiteMap'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

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
            <Route path="site-map" element={<SiteMap />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="tourist-routes/:name" element={<TouristRouteDescription />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
