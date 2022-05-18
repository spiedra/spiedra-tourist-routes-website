import React from 'react'

import { AirlineStops, Map } from '@mui/icons-material'

export const navbarItems = [
  {
    id: 0,
    icon: <AirlineStops />,
    label: 'Rutas Turísticas',
    route: 'tourist-routes'
  },
  {
    id: 1,
    icon: <Map />,
    label: 'Mapa del sitio',
    route: 'site-map'
  }
]
