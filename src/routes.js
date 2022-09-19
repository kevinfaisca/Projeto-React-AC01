import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Formulario from "./pages/Formulario";
import Sobre from "./pages/Sobre";

function Rotas(){
    return (
        <Router>
            <Routes>
                <Route exact path= "/" element={<Formulario/>} />
                <Route exact path= "/sobre" element={<Sobre/>} />
            </Routes>
        </Router>
    )
}

export default Rotas;
