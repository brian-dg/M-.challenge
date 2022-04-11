import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";

const Users = ({ user }) => {
  return (
    <>
      <tr className="text-left">
        <td className="text-left">{user.id}</td>
        <td className="text-left">{user.login}</td>
        <td className="ancho-columna">
          <Link key={user.id} to={`/usuario/${user.login}`}>
            <GrView className="icons" style={{ fontSize: '20px'}}/>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Users;
