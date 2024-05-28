import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { authSlice } from "../../../store/auth/authSlice";
import { Login } from "../Login";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticated } from "../../../store/auth/tests/fixtures/authFixtures";


// const mockStartGoogleSignIn = jest.fn();
// const mockStarLoginWithEmailPassword = jest.fn();

// jest.mock("../../../store/auth/thunks", () => ({
//   startGoogleSignIn: () => mockStartGoogleSignIn,
//   startLoginWithEmailPassword: ({email, password}) => {
//     return () => mockStarLoginWithEmailPassword({  email, password })
//   },
// }));
const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock("../../../store/auth/thunks", () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({ email, password }) => {
        return () => mockStartLoginWithEmailPassword({ email, password });
    },
}));

// mock poara redux 
// sobre escribe el comportamiento del dispatch
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => ( fn = () => {} ) => fn(),
}));


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticated,
  },
});

describe("Pruebas en Login", () => {

    beforeEach(() =>  jest.clearAllMocks() );

  test("Debe de mostrar el componente corectamente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    // screen.debug()
    // expect(screen.getAllByAltText('Login').length).toBeGreaterThanOrEqual(1)
  });

  test("Debe de mandar a llamar boton de signIn Google", () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);
    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  xtest("Deberia de llamar startLoginWithEmailPassword", () => {

    const email = "markuz@gmail.com";
    const password = "123456";

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole("textbox", { name: "Correo" });
    fireEvent.change(emailField, { target: { name: "email", value: email } });

    const passwordField = screen.getByTestId('password');
    fireEvent.change(passwordField, { target: { name: 'password', value: password } });

    const loginForm = screen.getByLabelText('submit-form');
    console.log(loginForm, 'asasda');
    fireEvent.submit(loginForm);

    expect(mockStarLoginWithEmailPassword).toHaveBeenCalledWith({ 
        email: email,
        password: password
    })

  });


});
