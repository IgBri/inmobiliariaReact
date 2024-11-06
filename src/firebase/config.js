import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAvXgmwjK8FY9PqkgayTzEvioaHs1JlGMo",
    authDomain: "paletta-inmobiliaria.firebaseapp.com",
    projectId: "paletta-inmobiliaria",
    storageBucket: "paletta-inmobiliaria.firebasestorage.app",
    messagingSenderId: "476190739152",
    appId: "1:476190739152:web:49f83f48dd9ea5034c2cd5"
};

export const app = initializeApp(firebaseConfig);