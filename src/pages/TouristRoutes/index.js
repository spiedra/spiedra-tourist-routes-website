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

import { getTouristRoutesData } from '../../services'
import Modal from '../../components/Modal'

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
             maxWidth: { xs: '100%', md: '100%' }
           }}
           alt={`Imagen de ${modalData.name}`}
           src={modalData.images[0]}
         />
         <Box>
           <h2>Ciudades que incluye la ruta</h2>
           {modalData.cities.map((item) => (
             <Box component="ul" key={item}>
               <li>{item}</li>
             </Box>
           ))}
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
        <h1>Rutas Turísticas</h1>
        <Box
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
              setData([...touristRoutesData.filter((x) => {
                for (const iterator of newValue) {
                  if (!(iterator.class in x.keyWords)) {
                    return false
                  }
                }
                return true
              })])
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
        </Box>
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
            ? data.map((item) => (
                <Card
                  key={item.name}
                  sx={{ maxWidth: 345 }}
                  onClick={() => handleOnClick(item.name)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.images[0]}
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
        title={'Detalles de la ruta turística'}
        content={modalBody}
      />
    </>
  )
}

export default TouristRoutes
