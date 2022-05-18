import React from 'react'

import { Box, CardMedia, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '2rem',
        height: '100vh',
        px: '1.5rem'
      }}
    >
      <h1>Bienvenido a Tu destino</h1>
      <h2>Highlights de destinos</h2>
      <Typography variant="h5">Costa esmeralda</Typography>
      <CardMedia sx={{ width: { xs: '100%', md: '55%' }, height: '400px', marginTop: '10px' }} component="iframe" src={'https://www.youtube.com/embed/o-9kzAdxJqs'} allow="autoPlay"/>
      <Typography variant="h5">Sierra gorda</Typography>
      <CardMedia sx={{ width: { xs: '100%', md: '55%' }, height: '400px', marginTop: '10px' }} component="iframe" src={'https://www.youtube.com/embed/A09ZYa4phRc'} allow="autoPlay"/>
      {/* <Typography variant="h5">Ruta del café</Typography> */}
      {/* <CardMedia sx={{ width: { xs: '100%', md: '55%' }, height: '400px' }} component="iframe" src={'https://www.youtube.com/embed/axQIP_kQL2k'} allow="autoPlay"/> */}
    </Box>
  )
}

export default Home
