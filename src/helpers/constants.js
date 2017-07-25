import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDP_rY62A6NlZ7TUDfsxU0cYPrfPVxuM_I",
    authDomain: "travel-1199d.firebaseapp.com",
    databaseURL: "https://travel-1199d.firebaseio.com",
    projectId: "travel-1199d",
    storageBucket: "travel-1199d.appspot.com",
    messagingSenderId: "187283010844"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const db = firebase.database();
export const firebaseAuth = firebase.auth
