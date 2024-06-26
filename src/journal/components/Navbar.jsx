import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { starLogOut } from '../../store/auth/thunks'
import { clearNotesLogOut } from '../../store/journal/journalSlice'

export const Navbar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const logOut = () => {        
        dispatch( starLogOut() )
        dispatch( clearNotesLogOut() )
    }

  return (
    <AppBar 
        position='fixed'
        sx={{
            // TODO Calculo 100 % que tenga disponible menos  el ancho que se recibe 
            //TODO ademas de que es el espacio para el sidebar 
            width: { sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px` }
         }}
        >

            <Toolbar>
                <IconButton 
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                    <Typography variant='h6' noWrap component="div" >JournalApp</Typography>

                    <IconButton type='button' onClick={logOut} color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
    </AppBar>
  )
}
