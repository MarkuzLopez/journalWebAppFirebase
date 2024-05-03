import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelected } from '../view';



export const JournalPage = () => {
  return (
   <JournalLayout>    
     <NothingSelected />
   </JournalLayout> 
  )
}
