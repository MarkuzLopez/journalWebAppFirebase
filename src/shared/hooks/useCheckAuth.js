import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseAuth } from '../../firebase/config';
import { login } from '../../store/auth/authSlice';

export const useCheckAuth = () => {

    const { status} = useSelector( state =>  state.auth );
    const dispatch = useDispatch();
  
    useEffect(() => {
     onAuthStateChanged(firebaseAuth,  async (user) => { 
      if(!user) return
  
      const { uid,  displayName , email, photoURL } = user;
      dispatch(login({uid,  displayName , email, photoURL}));
     })
    }, [])

    return status
}
