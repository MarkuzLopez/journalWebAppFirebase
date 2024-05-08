import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../firebase/config'
import { login } from '../store/auth/authSlice'

export const AppRouter = () => {

  const { status} = useSelector( state =>  state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
   onAuthStateChanged(firebaseAuth,  async (user) => { 
    if(!user) return

    const { uid,  displayName , email, photoURL } = user;
    dispatch(login({uid,  displayName , email, photoURL}));
   })
  }, [])
  

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
