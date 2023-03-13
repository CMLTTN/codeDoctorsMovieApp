
import { initializeApp } from "firebase/app";

 import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDsdUVMmSwZJF_LPXOs9qa2uMRN5efGlgk",
  authDomain: "the-first-movie-project.firebaseapp.com",
  databaseURL: "https://the-first-movie-project-default-rtdb.firebaseio.com",
  projectId: "the-first-movie-project",
  storageBucket: "the-first-movie-project.appspot.com",
  messagingSenderId: "376579122467",
  appId: "1:376579122467:web:dfb235f99b1b3e080ad896",
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
