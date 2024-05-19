import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyA-g5hIGn5yqHUfAWGHacQpuNUGa_Ul8VE",
  authDomain: "real-beauty-410c6.firebaseapp.com",
  projectId: "real-beauty-410c6",
  storageBucket: "real-beauty-410c6.appspot.com",
  messagingSenderId: "532968017614",
  appId: "1:532968017614:web:9bcc6a7b12bf0fe5ccca9f"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
