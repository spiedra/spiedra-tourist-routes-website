import React from 'react'

import Container from '@mui/material/Container'

const Home = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '5rem'
      }}
    >
      <h1>Pagina home</h1>
      <h2>Podemos incluir información de la pagina</h2>
    </Container>
  )
}

export default Home
