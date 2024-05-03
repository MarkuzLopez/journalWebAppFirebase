import { TurnedInNot } from '@mui/icons-material'
import { Divider, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({ drawerWidth= 240 }) => {
  return (
    <Drawer variant='permanent' open 
        sx={{ 
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }} >

        <Toolbar>
            <Typography variant='h6' noWrap component="div">
                Markuz Lopez
            </Typography>
        </Toolbar>

        <Divider />

        <List>
            {
                ['Lunes', 'Martes', 'Miercoles', 'Jueves'].map(text => (
                    <ListItemButton key={text} >
                        <ListItemIcon>
                            <TurnedInNot />
                        </ListItemIcon>

                        <Grid container>
                            <ListItemText primary={text} />
                            <ListItemText secondary={'asdasdasdas adsadasdasda asdasdadasdasd'} />
                        </Grid>               
                    </ListItemButton>
                ))
            }
        </List>

    </Drawer>
  )
}
