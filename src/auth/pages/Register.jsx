import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import { useForm } from '../../shared/hooks/useForm';

const formData = { 
  email: "",
  password: "",
  displayName: ""
}

const formValidation = {
  email: [(value) =>  value.includes('@'), 'El correo debe  de tener un @'],
  password: [(value) => value.length >= 6,  'el passsword debe de ser mayor a sesis digitos'],
  displayName: [(value)=> value.length >= 1, 'El nombre  es obliglatorio' ] //
}

export const Register = () => {

  const { email, password, displayName, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid  } =  useForm(formData, formValidation);

  console.log(displayNameValid);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout  title='Crear Cuenta'>
      <form onSubmit={onSubmit}>
        
        <Grid item xs={12} sx={{ mt: 2 }} > 
          <TextField 
            label="Nombre Completo"
            type='text'
            placeholder='Markuz'
            fullWidth
            name='displayName'
            value={displayName}
            onChange={onInputChange}

          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }} >
          <TextField
            label="Correo"
            type='email'
            placeholder="correo@google.com"
            fullWidth
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }} >
          <TextField 
            label="Contraseña"
            type='password'
            placeholder='Contraseña'
            fullWidth
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1}} >
          
          <Grid item xs={12} >
            <Button type='submit' variant='contained' fullWidth>
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
