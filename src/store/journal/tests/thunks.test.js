import { setSavingNote } from "../journalSlice";
import { startNewNote } from "../thunks";

describe('Pruebas unitarias en JournalThunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('Deberia de Llamar StarNewNote', async () => { 
        const uid = 'TEST-UID';

        getState.mockReturnValue({ auth: {uid: uid} });
        
        await startNewNote()(dispatch, getState)

     })
 })