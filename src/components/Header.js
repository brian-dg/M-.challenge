import React from "react";
import Formulario from "./Formulario";
import {Link} from 'react-router-dom';
import Formulario from "./Formulario";
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
<<<<<<< HEAD
        <Formulario/>
=======
        <Formulario />  
>>>>>>> d799c9ac27aa201e06fbdd4b47b9c5dc5b137ec9
    </>
) 
     
}

export default Header;