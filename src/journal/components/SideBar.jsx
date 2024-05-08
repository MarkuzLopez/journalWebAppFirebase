import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const SideBar = ({ drawerWidth= 240 }) => {

    const { displayName } = useSelector(state => state.auth);

  return (
    <Box 
        component='nav' sx={{ 
        width: { sm: drawerWidth}, flexShrink: {sm: 0}
     }}>
        <Drawer variant='permanent' open 
        sx={{ 
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }} >

        <Toolbar>
            <Typography variant='h6' noWrap component="div">
                {displayName}
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

    </Box>
  )
}
