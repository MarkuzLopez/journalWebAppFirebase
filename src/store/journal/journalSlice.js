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
      setNotes: (state, action) => {        
        state.isSaving = false;
        state.notes = action.payload;
      },
      setSaving: (state, action) => {
        state.isSaving = true;
      },
      updatedNote: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map(note => {
          if (note.id === action.payload.id) {
            return action.payload;
          }
          return note;
        })
      },
      deleteNodeById: (state, action) => {},
    },
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setSavingNote, setNotes, setSaving, updatedNote } = journalSlice.actions;