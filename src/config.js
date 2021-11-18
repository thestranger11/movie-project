import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: 'AIzaSyB5phJhs_DucWtGVe-OmlhZ17oaGEtHd5A',
    authDomain: 'morld-a09b5.firebaseapp.com',
    databaseURL:
        'https://morld-a09b5-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'morld-a09b5',
    storageBucket: 'morld-a09b5.appspot.com',
    messagingSenderId: '258044371103',
    appId: '1:258044371103:web:59df4b38b79e428e6c02aa',
    measurementId: 'G-Q0XH6GQBY7',
});

export default firebaseConfig;
