import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Box } from '@mui/system'

import { getTouristRoutesData } from '../../services'

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
        <Box
          sx={{
            px: '1rem',
            pt: '.8rem'
          }}
        >
          <h1>{touristRoute.name}</h1>
          <h2>{touristRoute.location}</h2>
          <Box component="p" sx={{ textAlign: 'justify', lineHeight: '28px' }}>
            Zonas Arqueológicas, Tradiciones Ancestrales, Gastronomía,
            Naturaleza y muchas cosas más van uniendo los diferentes destinos
            que tienen algo en común a través de las Rutas Turísiticas de
            México, para que aproveches tus viajes al máximo.
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              justifyContent: 'center'
            }}
          >
            {name}
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
