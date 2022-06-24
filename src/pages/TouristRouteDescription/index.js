import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Box } from '@mui/system'

import { getTouristRoutesData } from '../../services/gets'

const TouristRouteDescription = () => {
  const [touristRoute, setTouristRoute] = useState()
  const { name } = useParams()

  useEffect(() => {
    getTouristRoutesData().then((response) => {
      setTouristRoute(
        response.find((item) => {
          return item.name === name
        })
      )
    })
  }, [])

  return (
    <>
     {touristRoute
       ? (
        <Box>
          <h1>{touristRoute.name}</h1>
          <h2>{touristRoute.location}</h2>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: '100%', md: '100%' }
            }}
            alt={`Imagen de ${touristRoute.name}`}
            src={touristRoute.images[0]}
          />
          <Box>
            <h2>Ciudades que incluye la ruta</h2>
            {touristRoute.cities.map((item) => (
              <Box component="ul" key={item}>
                <li>{item}</li>
              </Box>
            ))}
          </Box>
          <h2>{`Acerca de la ruta ${touristRoute.name}`}</h2>
          <Box component="p" sx={{ textAlign: 'justify', lineHeight: '28px' }}>
            {touristRoute.description}
          </Box>
        </Box>
         )
       : (
           'Cargado'
         )}
    </>
  )
}

export default TouristRouteDescription
