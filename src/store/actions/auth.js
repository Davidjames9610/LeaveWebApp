import { auth, googleAuthProvider } from '../../firebase/firebase';

const login = (uid) => ({
    type: 'LOGIN',
    uid
});

const startLogin = () => {
    return () => {
        return auth.signInWithPopup(googleAuthProvider);
    };
};

const startLogout = () => {
    return () => {
        return auth.signOut();
    };
};

const logout = () => ({
    type: 'LOGOUT'
});

export { login, startLogin, startLogout, logout };
