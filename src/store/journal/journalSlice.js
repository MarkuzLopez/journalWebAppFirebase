import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    setSavingNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.isSaving = false;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.isSaving = false;
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updatedNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });

      state.messageSaved = `${action.payload.title}, actuaalizada coprrectamente`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...action.payload];
      state.isSaving = false;
    },
    clearNotesLogOut: (state, action) => { 
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      console.log(action.payload);
      console.log(state.notes, 'adsa');
      // TODO realizar  quitar la nota activa y del arreglo , 
      // quitar en firebase y del listado del sideba      
      state.active = null;
      state.notes = state.notes.filter( note => note.id  !== action.payload )
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNotesLogOut,
  deleteNoteById,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  setSavingNote,
  updatedNote,
} = journalSlice.actions;
