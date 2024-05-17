import { firebaseDB } from "../../firebase/config";
import {  addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { addNewEmptyNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, setSavingNote, updatedNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

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
    
      await updateDoc(doc(firebaseDB, `${uid}/journal/notes/${note.id}`), noteToFirestore);    

      dispatch( updatedNote(note))

    }
}

export const startUploadingFiles = (files = []) => { 
    return async (dispatch) => {
        dispatch ( setSaving()); 

        //selection multiple 
        const fileUploadPromises = [];
        
        for (const file of files ) { 
            fileUploadPromises.push(fileUpload (file))
        }

        const photoUrls = await Promise.all( fileUploadPromises );
    
        dispatch ( setPhotosToActiveNote(photoUrls) );
    }
}