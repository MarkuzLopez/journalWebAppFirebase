import { firebaseDB } from "../../firebase/config";
import {  addDoc, collection } from "firebase/firestore/lite";
import { addNewEmptyNote, setActiveNote, setSavingNote } from "./journalSlice";

export const startNewNote = () => { 
    
    return async (dispatch, getState ) => { 
        console.log('starNeNot', getState);
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