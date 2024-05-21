export const initialState = {
    status: 'checking',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null,
    errorMessage: null
}

export const authenticated = {
    status: 'authenticated',
    email: 'test@gmail.com',
    displayName: 'Markuz User',
    photoURL: 'https://foto.jpg',
    uid: '123ABC',
    errorMessage: null
}

export const notAuthenticated = {
    status: 'not-authenticated',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null,
    errorMessage: null
}

export const demoUser = {
    status: 'ABC123',
    email: 'demo@google.com',
    displayName: 'Demoo User',
    photoURL: 'https://foto.jpg',
    uid: 'ABC43232',    
}



