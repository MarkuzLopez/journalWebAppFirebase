import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";

export const Register = () => {
  return (
    <AuthLayout  title='Crear Cuenta'>
      <form>
        
        <Grid item xs={12} sx={{ mt: 2 }} > 
          <TextField 
            label="Nombre Completo"
            type='text'
            placeholder='Markuz'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }} >
          <TextField
            label="Correo"
            type='email'
            placeholder="correo@google.com"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }} >
          <TextField 
            label="Contraseña"
            type='password'
            placeholder='Contraseña'
            fullWidth
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1}} >
          
          <Grid item xs={12} >
            <Button variant='contained' fullWidth>
              Crear Cuenta
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end"  sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}> ¿Ya tienes una cuenta? </Typography>
            <Link component={RouterLink }  color="inherit" to="/auth/login">
              Inicia sesión aquí
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
