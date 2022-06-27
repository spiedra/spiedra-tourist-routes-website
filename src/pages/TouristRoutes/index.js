/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Autocomplete,
  TextField,
  Chip
} from '@mui/material'

import { getTouristRoutesData } from '../../services/gets'
import Modal from '../../components/Modal'

import {
  getRandomImage,
  randomNumberByRange,
  getMapCoordinates
} from '../../utils'

const keyWords = [
  { key: 0, class: 'Playa' },
  { key: 1, class: 'Montaña' },
  { key: 2, class: 'Familia' },
  { key: 3, class: 'Fiesta' },
  { key: 5, class: 'Trabajo' }
]

const TouristRoutes = () => {
  const [data, setData] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [touristRoutesData, setTouristRoutesData] = useState()
  const [modalData, setModalData] = useState()
  const [chipData, setChipData] = useState([])

  useEffect(() => {
    getTouristRoutesData().then((response) => {
      setData(response)
      setTouristRoutesData(response)
    })
  }, [])

  const handleOnClick = (param) => {
    setModalData(
      touristRoutesData.find((item) => {
        return item.name === param
      })
    )
    setIsModalOpen(true)
  }

  const getLocation = () => {
    const { x, y } = getMapCoordinates(randomNumberByRange(0, 9))
    return (
      'https://maps.google.com/?ll=' + x + ',' + y + '&z=14&t=m&output=embed'
    )
  }

  // eslint-disable-next-line react/prop-types

  const modalBody = (
    <>
      {modalData
        ? (
        <Box>
          <h1>{modalData.name}</h1>
          <h2>{modalData.location}</h2>
          <Box
            component="img"
            sx={{
              Width: { xs: '100%', md: '430px' },
              height: '430px',
              objectFit: 'cover'
            }}
            alt="Imagen de un lugar turistico"
            src={getRandomImage(randomNumberByRange(0, 19))}
          />
          <h2>Localización en Mapa</h2>
          <Box sx={{ width: '100%' }}>
            <iframe
              src={getLocation()}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <h2>{`Acerca de la ruta ${modalData.name}`}</h2>
          <Box component="p" sx={{ textAlign: 'justify', lineHeight: '28px' }}>
            {modalData.description}
          </Box>
        </Box>
          )
        : (
            'Cargado'
          )}
    </>
  )

  return (
    <>
      <Box>
        <h1>Zonas Turísticas</h1>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Autocomplete
            multiple
            id="fixed-tags-demo"
            value={chipData}
            onChange={(event, newValue) => {
              setChipData([...newValue])
              setData([
                ...touristRoutesData.filter((x) => {
                  for (const iterator of newValue) {
                    if (!(iterator.class in x.keyWords)) {
                      return false
                    }
                  }
                  return true
                })
              ])
            }}
            options={keyWords}
            getOptionLabel={(option) => option.class}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  key={option.key}
                  label={option.class}
                  {...getTagProps({ index })}
                />
              ))
            }
            sx={{ width: { xs: '100%', md: '55%' } }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Categoría" />
            )}
          />
        </Box> */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
            mt: '2rem'
          }}
        >
          {data
            ? data.map((item, index) => (
                <Card
                  key={index}
                  sx={{ maxWidth: 345 }}
                  onClick={() => handleOnClick(item.name)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={getRandomImage(randomNumberByRange(0, 19))}
                      alt={`Imagen de ${item.name}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            ))
            : 'Cargando'}
        </Box>
      </Box>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => setIsModalOpen(false)}
        maxWidth="lg"
        title={'Detalles de la zona turística'}
        content={modalBody}
      />
    </>
  )
}

export default TouristRoutes
