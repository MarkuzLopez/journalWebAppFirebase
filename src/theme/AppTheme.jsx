import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { purpleTheme } from './purple'

// * se convierte en high order component 
//* va a tener otros compon entes hijos
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
