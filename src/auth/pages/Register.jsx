import React, { useMemo, useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../shared/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPasssword } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "El correo debe  de tener un @"],
  password: [
    (value) => value.length >= 6,
    "el passsword debe de ser mayor a sesis digitos",
  ],
  displayName: [(value) => value.length >= 1, "El nombre  es obliglatorio"], //
};

export const Register = () => {

  const { status, errorMessage } = useSelector( state =>  state.auth);   
  const dispatch = useDispatch();

  const isAuthenticated = useMemo( ()=>  status === 'checking', [status] );

  const {
    email,
    password,
    displayName,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidation);

  const [formSubmmited, setFormSubmmited] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmmited(true)
    dispatch( startCreatingUserWithEmailPasssword(formState) )    
  };

  return (
    <AuthLayout title="Crear Cuenta">
      <h1>FormValid {isFormValid ? 'valido' : 'no valido'}</h1>
      <form onSubmit={onSubmit}>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre Completo"
            type="text"
            placeholder="Markuz"
            fullWidth
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            error={ !!displayNameValid && formSubmmited}
            helperText={displayNameValid}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmmited}
            helperText={emailValid}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmmited}
            helperText={passwordValid}
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

          <Grid item xs={12} display={ !!errorMessage ? '' :  'none' } >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>

          <Grid item xs={12}>            
            <Button disabled={ isAuthenticated } type="submit" variant="contained" fullWidth>
              Crear Cuenta
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}> ¿Ya tienes una cuenta? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Inicia sesión aquí
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
