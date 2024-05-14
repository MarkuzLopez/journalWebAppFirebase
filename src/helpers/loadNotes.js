import { collection, query, getDocs } from "@firebase/firestore";
import { firebaseDB } from "../firebase/config";
 
export const loadNotes = async (uid) => {
 
    const notesSnap = await getDocs(query(collection(firebaseDB, `${ uid }/journal/notes`)));
    const notes = [];
 
    notesSnap.forEach( snapHijo => {        
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
      });
 
    return notes;
};