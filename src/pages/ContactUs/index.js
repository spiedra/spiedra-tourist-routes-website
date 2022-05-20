import React from 'react'
import { Box } from '@mui/system'
import { TextField, Button } from '@mui/material'

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          px: '1rem',
          pt: '.8rem'
        }}
      >
        <h1>Contáctanos</h1>
        <Box>
          <Box>
            <p>
              Arriésgate a tomar la mejor aventura de tu vida. Por favor, ponte en contacto con nosotros. ¿Cómo podemos ayudarte?
              ¿Qué es lo que esperas de las rutas turísticas? Queremos leerte...
            </p>
            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '50vw', margin: 'auto' }}>
            <TextField sx={{ marginBottom: '10px' }}
             label={'Nombre'}/>
             <TextField sx={{ marginBottom: '10px' }}
             label={'Correo electrónico'}/>
             <TextField sx={{ marginBottom: '10px' }}
             label={'¿De dónde nos visitas?'}/>
             <TextField sx={{ marginBottom: '10px' }}
             label={'Mensaje'}/>
             <Button
             variant="contained"
             color="primary"
             >Enviar</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ContactUs
