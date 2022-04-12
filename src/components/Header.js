import React from "react";
import Formulario from "./Formulario";
import {Link} from 'react-router-dom';
const Header = () => {
return(
    <>
    
    <Link to="/"  style={{ textDecoration: 'none' }}>
       <header className="py-5">
            <h1>
                Buscar usuarios
            </h1>
        </header>
        </Link>
        <Formulario />  
    </>
) 
     
}

export default Header;