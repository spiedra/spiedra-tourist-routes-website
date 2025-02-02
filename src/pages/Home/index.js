/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { Controller, useForm } from 'react-hook-form'

import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Autocomplete,
  Chip,
  Paper
} from '@mui/material'
import Modal from '../../components/Modal'

import Carousel from 'react-material-ui-carousel'

import {
  getRandomImage,
  randomNumberByRange,
  getMapCoordinates
} from '../../utils'

import { getRecommendedTouristClass } from '../../services/posts'
import { getRecommendedRoutes } from '../../services/gets'
import { height } from '@mui/system'

const category = {
  peaceful: 'pacifista',
  conqueror: 'aventurero',
  extremist: 'extremista'
}

const Home = () => {
  const [touristRoutes, setTouristRoutes] = useState([])
  const [touristRoutePlaces, setTouristRoutePlaces] = useState([])
  const [touristClass, setTouristClass] = useState()
  const [touristPlace, setTouristPlace] = useState()
  const [isModalPlacesOpen, setIsModalPlacesOpen] = useState(false)
  const [isModalShowPlaceOpen, setIsModalShowPlaceOpen] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      price: '',
      type: '',
      services: '',
      access: '',
      capacity: ''
    }
  })

  // eslint-disable-next-line react/prop-types
  const CarouselItem = ({ img }) => {
    return (
      <Paper sx={{ boxShadow: 'none' }}>
        <Box
          component="img"
          sx={{
            maxWidth: { xs: '100%', md: '100%' }
          }}
          alt="Imagen de un lugar turistico"
          src={img}
        />
      </Paper>
    )
  }

  const onSubmit = async (values) => {
    const recommendedClass = await getRecommendedTouristClass(values)
    setTouristClass(category[recommendedClass.result])
    getRecommendedRoutes(recommendedClass.result).then((response) => {
      setTouristRoutes(response.touristRouteResult)
    })
  }

  const OnShowTouristPlaces = (index) => {
    setTouristRoutePlaces(touristRoutes[index].places)
    setIsModalPlacesOpen(true)
  }

  const onShowPlaceDetails = (index) => {
    setTouristPlace(touristRoutePlaces[index])
    setIsModalShowPlaceOpen(true)
  }

  const getLocation = () => {
    const { x, y } = getMapCoordinates(randomNumberByRange(0, 9))
    return (
      'https://maps.google.com/?ll=' + x + ',' + y + '&z=14&t=m&output=embed'
    )
  }

  const modalPlacesBody = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'center',
          mt: '2rem'
        }}
      >
        {touristRoutePlaces
          ? touristRoutePlaces.map((item, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 345 }}
                onClick={() => onShowPlaceDetails(index)}
              >
                <CardActionArea>
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
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          ))
          : 'Cargando'}
      </Box>
    </>
  )

  const modalShowPlaceBody = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px'
        }}
      >
        {touristPlace
          ? (
          <Box>
            <h1>{touristPlace.name}</h1>
            <h2>{touristPlace.location}</h2>
            <Box
              component="img"
              sx={{
                maxWidth: { xs: '100%', md: '700px' },
                height: '400px',
                objectFit: 'cover'
              }}
              alt="Imagen de un lugar turistico"
              src={getRandomImage(randomNumberByRange(0, 19))}
            />
            <h2>Localización en mapa</h2>
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
            <h2>{`Acerca de la ruta ${touristPlace.name}`}</h2>
            <Box
              component="p"
              sx={{ textAlign: 'justify', lineHeight: '28px' }}
            >
              {touristPlace.description}
            </Box>
          </Box>
            )
          : (
              'Cargado'
            )}
      </Box>
    </>
  )

  return (
    <>
      <h1>Recomendador de Rutas Turísticas</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            my: 1,
            width: { xs: '37ch', md: '41ch' }
          }
        }}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid
          container
          spacing={{ xs: 0.5, sm: 0.5, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item>
            <Controller
              control={control}
              name="price"
              rules={{ required: true }}
              render={({ field: { ...field } }) => (
                <TextField
                  {...field}
                  select
                  error={!!errors.price}
                  label="Precio"
                >
                  <MenuItem value="low">$400-$750</MenuItem>
                  <MenuItem value="medium">$750-$1500</MenuItem>
                  <MenuItem value="high">$1500-$4000</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="type"
              rules={{ required: true }}
              render={({ field: { ...field } }) => (
                <TextField
                  {...field}
                  select
                  error={!!errors.type}
                  label="Categoría"
                >
                  <MenuItem value="mountain">Montaña</MenuItem>
                  <MenuItem value="beach">Playa</MenuItem>
                  <MenuItem value="city">Ciudad</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="services"
              rules={{ required: true }}
              render={({ field: { ...field } }) => (
                <TextField
                  {...field}
                  select
                  error={!!errors.services}
                  label="Servicios"
                >
                  <MenuItem value="none">Ninguno</MenuItem>
                  <MenuItem value="some">Algunos</MenuItem>
                  <MenuItem value="many">Muchos</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="access"
              rules={{ required: true }}
              render={({ field: { ...field } }) => (
                <TextField
                  {...field}
                  select
                  error={!!errors.access}
                  label="Acceso"
                >
                  <MenuItem value="walk">A pie</MenuItem>
                  <MenuItem value="car">Por carro</MenuItem>
                  <MenuItem value="sea">Por mar</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              name="capacity"
              rules={{ required: true }}
              render={({ field: { ...field } }) => (
                <TextField
                  {...field}
                  select
                  error={!!errors.capacity}
                  label="Cantidad/Capacidad de personas"
                >
                  <MenuItem value="low">1 a 3</MenuItem>
                  <MenuItem value="medium">3 a 6</MenuItem>
                  <MenuItem value="high">6 a muchas</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '42.8ch'
            }}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: '65%' }}
              onClick={handleSubmit}
            >
              Consultar
            </Button>
          </Grid>
        </Grid>
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
        {touristRoutes
          ? touristRoutes.map((item, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 345 }}
                onClick={() => OnShowTouristPlaces(index)}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          ))
          : 'Cargando'}
      </Box>
      <Modal
        isOpen={isModalPlacesOpen}
        onClose={() => setIsModalPlacesOpen(false)}
        onSubmit={() => setIsModalPlacesOpen(false)}
        maxWidth="lg"
        title={'Detalles de ruta turística tipo ' + touristClass}
        content={modalPlacesBody}
      />
      <Modal
        isOpen={isModalShowPlaceOpen}
        onClose={() => setIsModalShowPlaceOpen(false)}
        onSubmit={() => setIsModalShowPlaceOpen(false)}
        maxWidth="lg"
        title={'Detalles de la zona turística'}
        content={modalShowPlaceBody}
      />
    </>
  )
}

export default Home
