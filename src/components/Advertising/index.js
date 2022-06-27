/* eslint-disable react/prop-types */
import React from 'react'

import { Box, Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import villaLapas from '../../assets/villa-lapas.jpg'
import tambor from '../../assets/tambor.jpg'

const advertisingArray = [
  { adInfo: 'Publicidad de villa lapas', adLink: 'https://www.villalapas.com/', img: villaLapas },
  { adInfo: 'Publicidad de tambor', adLink: 'https://www.barcelo.com/en-us/barcelo-tambor/', img: tambor }
]

const Advertising = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Box component="h3" sx={{ textAlign: 'start', ml: '1.6rem' }}>
        Publicidad
      </Box>
      {advertisingArray
        ? (
        <>
          <Carousel>
            {advertisingArray.map((item, i) => (
              <Item key={i} {...item} />
            ))}
          </Carousel>
        </>
          )
        : (
            'Cargando'
          )}
    </Box>
  )
}

const Item = ({ adInfo, adLink, img }) => {
  return (
    <Paper sx={{ boxShadow: 'none' }}>
      <a href={adLink} target="_blank" rel="noreferrer">
        <Box
          component="img"
          sx={{ maxWidth: { xs: 175, md: 225 }, ml: '1rem' }}
          alt={adInfo}
          src={img}
        />
      </a>
    </Paper>
  )
}

export default Advertising
