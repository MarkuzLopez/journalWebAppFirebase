import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Navbar,  SideBar } from '../components'

const drawerWidth =  280

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex' }}>
        {/* Navbar  */}
        <Navbar drawerWidth={drawerWidth} />
        {/* Sidebar */}
        <SideBar drawerWidth={ drawerWidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 2 }}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}
