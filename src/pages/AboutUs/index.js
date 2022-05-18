import React from 'react'
import { Box } from '@mui/system'

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          px: '1rem',
          pt: '.8rem'
        }}
      >
        <h1>Acerca de nosotros</h1>
        <Box>
          <Box
            sx={{
              textAlign: 'center',
              display: 'inline-block',
              width: '100%',
              margin: 'auto'
            }}
          >
            <h2>Rutas turísiticas Tu-Destino</h2>
          </Box>
          <Box>
            <p>
              Somo una empresa con más de 20 años operando en el país para la
              recomendación de rutas turísticas a las personas que quieren
              disfrutar de la belleza natural que poseemos en Costa Rica.
              Nuestra empresa cuenta con los estandares más altos en
              recomendación de rutas turísticas a la medida del cliente.
            </p>
            <p>
              Misión: Ser una plataforma de recomendación de rutas turísticas
              número uno del país.
            </p>
            <p>
              Visión: Poner a dispoción la información de rutas turísticas a las
              personas.
            </p>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AboutUs
