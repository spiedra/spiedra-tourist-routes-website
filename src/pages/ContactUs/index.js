import React from 'react'
import { Box } from '@mui/system'
import { TextField, Button, TextareaAutosize } from '@mui/material'

const ContactUs = () => {
  return (
    <>
      <Box>
        <h1>Contáctanos</h1>
        <Box>
          <Box>
            <p>
              Arriésgate a tomar la mejor aventura de tu vida. Por favor, ponte en contacto con nosotros. ¿Cómo podemos ayudarte?
              ¿Qué es lo que esperas de las rutas turísticas? Queremos leerte...
            </p>
            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: { xs: '100%', md: '55%' }, margin: 'auto' }}>
            <TextField sx={{ marginBottom: '10px' }}
             label={'Nombre'}/>
             <TextField sx={{ marginBottom: '10px' }}
             label={'Correo electrónico'}/>
             <TextField sx={{ marginBottom: '10px' }}
             label={'¿De dónde nos visitas?'}/>
             <TextareaAutosize sx={{ marginBottom: '10px' }}
            placeholder="mensaje"
            minRows={5}/>
             <Button sx={{ marginTop: '10px' }}
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
