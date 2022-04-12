import { Link } from 'react-router-dom';
import React from 'react';

function Error({value}) {
    const {error} = value
    return(   
        <div className="no_encontrado">
        <h1> Busqueda no encontrada</h1>
        <Link to="/"> Volver al Inicio</Link>
        </div>
    );
}

export default Error;
