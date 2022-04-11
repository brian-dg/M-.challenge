import { Link } from "react-router-dom";
const Users = ({user}) => {
    return (
        <>    
            
            <tr className="text-left">
                <td className="text-left">{user.id}</td>
                <td className="text-left">{user.login}</td>  
                <td>
                <Link key={user.id} to={`/usuario/${user.login}`}>Ver</Link>
                </td>             
            </tr>         
            
        </>
    )
}

export default Users;