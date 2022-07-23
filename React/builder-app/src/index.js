import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter
} from "react-router-dom";
import './Styles/Base.css';
import Splash from './View/Slpash'
import App from './View/App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from "react-router-dom";
import ProjectData from './Model/DataApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Splash/>}/>
        <Route path="/main" element={<App/>} />
    </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
