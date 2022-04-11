import React from "react";
import {Link} from 'react-router-dom';
const Header = () => {
return(
    <>
    <Link to={`/`}  style={{ textDecoration: 'none' }}>
       <header className="py-5">
            <h1>
                Buscar usuarios
            </h1>
        </header>
        </Link>
    </>
) 
     
}

export default Header;