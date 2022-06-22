import React from 'react'

import CircleIcon from '@mui/icons-material/Circle'

import { Grid } from '@mui/material'

import { Box } from '@mui/system'

import { useNavigate } from 'react-router'

const arraySites = [
  { name: 'Inicio', route: '' },
  { name: 'Rutas Turísticas', route: 'tourist-routes' },
  { name: 'Mapa del sitio', route: 'site-map' }
]

const SiteMap = () => {
  const navigate = useNavigate()

  const handleOnClick = (route) => {
    navigate(`/${route}`)
  }

  return (
    <>
      <Box>
        <h1>Mapa del sitio</h1>

        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(arraySites).map((element, index) => (
            <Grid
              item
              sx={{
                display: 'inline-flex',
                margin: 'auto'
              }}
              key={index}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <CircleIcon
                  fontSize='large'
                  onClick={() => handleOnClick(element.route)}
                ></CircleIcon>
                <label>{element.name}</label>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default SiteMap
