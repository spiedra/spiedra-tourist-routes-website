import React from 'react'

import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '3rem',
        background: 'black',
        color: 'white'
      }}
    >
      <Box component="span" sx={{ fontSize: '13px' }}>
        IF7103 SISTEMAS EXPERTOS PARA LA ADMINISTRACIÓN
      </Box>
    </Box>
  )
}

export default Footer
