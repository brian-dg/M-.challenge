import { Link } from "react-router-dom"
export default function NotFoundPage() {
    return (
        <div className="no_encontrado">
            <h1> Pagina no encontrada</h1>
            <Link to="/"> Volver al Inicio</Link>
        </div>
    )
}