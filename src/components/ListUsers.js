import useUsers from "../hooks/useUser";
import Users from "./Users";
import Error from "./Error";

const ListUsers = () => {
  const { users } = useUsers();
  const { error} = useUsers();

  return (
    <div className="row justify-content-center">
      {users.length === 0 ? (
        <Error value={{ error }} />
      ) : (
        <div className="col-10">
          <table className="table table-responsive table-bordered table-hover ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE</th>
                <th scope="col" className="ancho-columna">
                  ACCIONES
                </th>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, 10).map((user) => (
                <Users key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListUsers;
