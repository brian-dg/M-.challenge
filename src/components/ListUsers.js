import useUsers from "../hooks/useUser";
import {Row} from 'react-bootstrap';
import users from './Users';
import Users from "./Users";

const ListUsers = () => {
    const {users} = useUsers();
   
    return(
        <div className="row justify-content-center">
            <div className="col-10">
            <table className="table table-responsive table-bordered table-hover ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col" className="ancho-columna">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {users.slice(0,10).map(user =>(     
                                
                        <Users
                            key={user.id}
                            user = {user}
                        />                                      
                    ))}
                </tbody>
            </table>  
            </div>        
        </div>
    )
}

export default ListUsers;