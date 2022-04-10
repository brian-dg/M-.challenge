import useUsers from "../hooks/useUser";
import {Row} from 'react-bootstrap';
import users from './Users';
import Users from "./Users";


const ListUsers = () => {
    const {users} = useUsers();
    return(
        <Row>
            {users.map(user =>(
                <Users
                    key={user.id}
                    user = {user}
                />
            ))}
        </Row>
    )
}

export default ListUsers;