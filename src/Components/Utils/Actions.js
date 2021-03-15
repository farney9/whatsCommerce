import { firebaseApp } from "./Firebase";
import * as firebase from "firebase";

export const validateSesion = (setValidateSession) => {
    firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
            console.log('Usuario logueado');
            setValidateSession(true)
        } else {
            console.log('No se ha iniciado la sesion');
            setValidateSession(false)
        }
    })
}
export const validatePhoneNumber = (setPhoneAuth) => {
    firebase.auth().onAuthStateChanged((user)=> {
        if (user.phoneNumber) {
            setPhoneAuth(true)
            console.log('Usuario logueado');
        } else {
            console.log('No se ha iniciado la sesion');
        }
    })
}

export const closeSession = () => {
    firebase.auth().signOut()
}