import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2z0tTsQ0JMXSvWtqOfcKW69CMQ2-gJak",
  authDomain: "contato-andressa-ilustra.firebaseapp.com",
  databaseURL: "https://contato-andressa-ilustra-default-rtdb.firebaseio.com",
  projectId: "contato-andressa-ilustra",
  storageBucket: "contato-andressa-ilustra.appspot.com",
  messagingSenderId: "553740870063",
  appId: "1:553740870063:web:c9204fcdc3c3f6c7410f5a",
  measurementId: "G-V11FJZY4BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);