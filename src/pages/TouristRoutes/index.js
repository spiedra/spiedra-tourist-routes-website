import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'

import { useNavigate } from 'react-router'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button
} from '@mui/material'
import { getTouristRoutesData } from '../../services'

const TouristRoutes = () => {
  const [touristRoutes, setTouristRoutes] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    getTouristRoutesData().then((response) => {
      setTouristRoutes(response)
    })
  }, [])

  const handleOnClick = (param) => {
    navigate(`/tourist-routes/${param}`)
  }

  const handleChange = (value) => {
    console.log(value)
  }

  return (
    <>
      <Box
        sx={{
          px: '1rem',
          pt: '.8rem'
        }}
      >
        <h1>Rutas Turísticas</h1>
        <Box
          sx={{
            backgroundColor: '#f3f3f3',
            borderRadius: '10px',
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <Box
              component="input"
              onChange={(e) => handleChange(e.target.value)}
              sx={{
                backgroundColor: '#f3f3f3',
                fontSize: '1.2rem',
                border: 'none',
                borderBottom: '0.3rem solid transparent',
                borderRadius: '4px 0px 0px 4px',
                height: '3rem',
                outline: 'none',
                padding: '0 0.625rem',
                width: ' 100%'
              }}
            />
            <Button>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
            mt: '2rem'
          }}
        >
          {touristRoutes
            ? touristRoutes.map((item) => (
                <Card
                  key={item.name}
                  sx={{ maxWidth: 345 }}
                  onClick={() => handleOnClick(item.name)}
                >
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
