import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { useCheckAuth } from '../shared/hooks/useCheckAuth'

export const AppRouter = () => {

  const status  =  useCheckAuth()

  if(status === 'checking') {
   return  <CheckingAuth /> 
  }

  return (
    <Routes>

      { 
        (status === 'authenticated') ? 
        <Route path='/*' element={ <JournalRoutes   />}  /> 
        : <Route path='/auth/*' element={ <AuthRoutes />}  /> 
        
      }

      <Route path='/*' element={ <Navigate to="/auth/login" /> } />


        {/* Login and Registerm routes publics */}
        {/* <Route path='/auth/*' element={ <AuthRoutes />}  /> */}

        {/* JournalApp Routes private  */}
        {/* <Route path='/*' element={ <JournalRoutes   />}  /> */}
    </Routes>
  )
}
