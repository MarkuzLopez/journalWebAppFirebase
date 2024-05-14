import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelected, NoteView } from '../view';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal';



export const JournalPage = () => {

  const { isSaving, active } = useSelector(state => state.journal);
  
  const dispatch = useDispatch();

  const addNote = () => { 
    dispatch( startNewNote() )
  }


  return (
   <JournalLayout> 
    
    {
      (!!active) ?
      <NoteView /> : 
      <NothingSelected />
    }
     {/* <NothingSelected /> */}

     {/* <NoteView /> */}

     <IconButton 
      type='button'
      disabled ={ isSaving }
      onClick={ addNote }
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
     >

      <AddOutlined sx={{ fontSize: 30 }} />

     </IconButton>
   </JournalLayout> 
  )
}
