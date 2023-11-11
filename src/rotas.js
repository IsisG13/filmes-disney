
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import App from './App';
import Movies from './paginas/movies';
import Lista from "./paginas/lista";

function Roteamento() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/movies" element={<Movies/>} /> 
        <Route path="/lista" element={<Lista/>} /> 
      </Routes>
    </Router>
  );
}

export default Roteamento;
