/* eslint-disable no-unused-vars */
import React from 'react'

import { Controller, useForm } from 'react-hook-form'

import { Box, Button, Grid, MenuItem, TextField } from '@mui/material'

const Home = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (values) => {
    console.log(values)
  }

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
        </Grid>
        <Box
          sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: '25%', mt: '1rem' }}
            onClick={handleSubmit}
          >
            Consultar
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Home
