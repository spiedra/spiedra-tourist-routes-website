import React, { useState, useEffect } from 'react'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box
} from '@mui/material'
import { getTouristRoutesData } from '../../services'

const TouristRoutes = () => {
  const [touristRoutes, setTouristRoutes] = useState()

  useEffect(() => {
    getTouristRoutesData().then((response) => {
      setTouristRoutes(response)
    })
  }, [])

  return (
    <>
      <Box
        sx={{
          px: '1rem',
          pt: '.8rem'
        }}
      >
        <h1>Rutas Turísticas</h1>
        <Box component="p" sx={{ textAlign: 'justify', lineHeight: '28px' }}>
          Zonas Arqueológicas, Tradiciones Ancestrales, Gastronomía, Naturaleza
          y muchas cosas más van uniendo los diferentes destinos que tienen algo
          en común a través de las Rutas Turísiticas de México, para que
          aproveches tus viajes al máximo.
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center'
          }}
        >
          {touristRoutes
            ? touristRoutes.map((item) => (
                <Card key={item.name} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.images[0]}
                      alt={`Imagen de ${item.name}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            ))
            : 'Cargando'}
        </Box>
      </Box>
    </>
  )
}

export default TouristRoutes
