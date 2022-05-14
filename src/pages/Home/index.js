import React from 'react'

import Box from '@mui/material/Box'

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '5rem',
        height: '100vh',
        px: '1.5rem'
      }}
    >
      <h1>Pagina home</h1>
      <h2>Podemos incluir información de la pagina</h2>
    </Box>
  )
}

export default Home
