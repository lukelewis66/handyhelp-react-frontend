import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBMyHuPUowgsJ7TKb9WWqdjJU4pyveLgt8",
    authDomain: "handyhelp-f4192.firebaseapp.com",
    databaseURL: "https://handyhelp-f4192.firebaseio.com",
    projectId: "handyhelp-f4192",
    storageBucket: "handyhelp-f4192.appspot.com",
    messagingSenderId: "434480313769",
    appId: "1:434480313769:web:f21fc6a0eaa0cbcf5600b8",
    measurementId: "G-BSQFJTX9NF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var UID;

// access UID from any component with localStorage.getItem("UID")
// if it returns undefined, nobody is logged in.
// otherwise it'll return their UID. 
firebase.auth().onAuthStateChanged(function (user) {
    //user logged in
    if (user) {
        UID = user.uid;
        localStorage.setItem("UID", UID);
        localStorage.setItem("email", user.email);
    }
    //user logged out
    else {
        localStorage.removeItem("UID");
        localStorage.removeItem("email");
    }
})

export function signIn(email, password) {
    return new Promise(function (resolve, reject) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                resolve("success");
            })
            .catch((error) => {
                reject(error.message);
            })
    })
}


export function signUp(email, password) {
    return new Promise(function (resolve, reject) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("in success");
                resolve("success");
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error code: ", errorCode);
                console.log("error message: ", errorMessage);
                reject(errorMessage);
            });
    })
}

export function signOut() {
    return new Promise(function (resolve, reject) {
        firebase.auth().signOut().then(function () {
            resolve("success");
        }).catch(function (error) {
            reject(error.message);
        });
    })
}

export function getUID() {
    return UID;
}