import useUsers from "../hooks/useUser";
import {Row} from 'react-bootstrap';
import users from './Users';
import Users from "./Users";


const ListUsers = () => {
    const {users} = useUsers();
    return(
        <Row className="col-8">
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOMBRE</th>
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
           
        </Row>
    )
}

export default ListUsers;