import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import Team from './pages/Team';
import Navbar from './containers/Navbar';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<App />} />
                <Route path="/Team" element = {<Team />} />
            </Routes>
        </BrowserRouter>
    </>
    , document.getElementById("root"))
    
serviceWorker.register();
