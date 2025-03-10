import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4Dc2cgZEuJRjL_borJ6NN7mQdbnpa6Qk",
  authDomain: "mern-book-inventory-in.firebaseapp.com",
  projectId: "mern-book-inventory-in",
  storageBucket: "mern-book-inventory-in.appspot.com", 
  messagingSenderId: "1053190001889",
  appId: "1:1053190001889:web:6ad841ef87b678f68c53a0"
};

const app = initializeApp(firebaseConfig);
export default app;
