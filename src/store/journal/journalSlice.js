import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
      isSaving: false,
      messageSaved: '',
      notes: [],
      active: null,
    },
    reducers: {
     setSavingNote: (state) => { 
        state.isSaving = true;
     },
      addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving =  false;
      },
      setActiveNote: (state, action) => {
        state.active = action.payload;
        state.isSaving = false;
      },
      setNotes: (state, action) => {},
      setSaving: (sate, action) => {},
      updateNote: (state, action) => {},
      deleteNodeById: (state, action) => {},
    },
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setSavingNote } = journalSlice.actions;