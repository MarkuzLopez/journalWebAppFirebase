import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login and Registerm routes publics */}
        <Route path='/auth/*' element={ <AuthRoutes />}  />

        {/* JournalApp Routes private  */}
        <Route path='/*' element={ <JournalRoutes   />}  />
    </Routes>
  )
}
