import { firebaseDB } from "../../firebase/config";
import {  addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { addNewEmptyNote, setActiveNote, setNotes, setSaving, setSavingNote, updatedNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => { 
    
    return async (dispatch, getState ) => { 

        const { uid } = getState().auth;
        dispatch(setSavingNote() )
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        //dispatch
        const doc = await addDoc( collection ( firebaseDB, `${uid}/journal/notes`),  {
            ...newNote
        } );        

        newNote.id = doc.id;
         dispatch( addNewEmptyNote(newNote));
        dispatch( setActiveNote(newNote));
    }
}

export const startLoadingNotes  = () => { 
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!uid) throw new  Error('El UID del usuario no existe');

        const notes = await loadNotes(uid);
        
        dispatch( setNotes(notes) )
    }
}

export const startSaveNotes = () => { 
    return async (dispatch, getState) => {

        dispatch( setSaving() )

        const { uid } =  getState().auth;
        const { active:note  } =  getState().journal;     
   
      const noteToFirestore = {...note}
      delete noteToFirestore.id
      const noteRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)
      await updateDoc(noteRef, noteToFirestore);

      dispatch( updatedNote(note))

    }
}