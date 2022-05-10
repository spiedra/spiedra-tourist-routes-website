import React from 'react'

import Box from '@mui/material/Box'
import { footerSyles } from './styles'

const Footer = () => {
  return (
    <Box component="footer" sx={footerSyles.footerContainer}>
      <Box component="span" sx={footerSyles.span}>
        IF7103 SISTEMAS EXPERTOS PARA LA ADMINISTRACIÓN
      </Box>
    </Box>
  )
}

export default Footer
