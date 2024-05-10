import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
      isSaving: true,
      messageSaved: '',
      notes: [],
      active: null,
    },
    reducers: {
      addNewEmptyNote: (state, action) => {},
      setActiveNote: (satet, action) => {},
      setNotes: (state, action) => {},
      setSaving: (sate, action) => {},
      updateNote: (state, action) => {},
      deleteNodeById: (state, action) => {},
    },
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote } = journalSlice.actions;