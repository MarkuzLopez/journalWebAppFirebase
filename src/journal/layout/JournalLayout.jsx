import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../components'

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex' }}>
        {/* Navbar  */}
        <Navbar />

        {/* Sidebar */}
        <Box 
            component="nav" 
            sx={{ flexGrow: 1, p: 3}}>

                {/* Toolbar */}
                { children }
        </Box>
    </Box>
  )
}
