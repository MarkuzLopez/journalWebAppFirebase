import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../shared/hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {

  const { status } = useSelector( state =>  state.auth );
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({ 
    email: "",
    password: ""
  })

  const isAuthenticated = useMemo( () =>  status === 'checking', [status]);

  const onSubmit = (event) => { 
    event.preventDefault();    
    dispatch( checkingAuthentication() )
  }
  
  const onGoogleSigIn = () => { 
    dispatch( startGoogleSignIn() )
  }

  return (
    <AuthLayout title="Login!! ">
      <form onSubmit={ onSubmit } >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={ onInputChange }
            placeholder="correo@google.com"
            fullWidth
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
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button disabled={isAuthenticated} type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button  disabled={ isAuthenticated}  type="button" onClick={onGoogleSigIn} variant="contained" fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google </Typography>
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">              
              Crear una cuenta.
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
