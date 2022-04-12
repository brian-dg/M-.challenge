import useUsers from "../hooks/useUser";
<<<<<<< HEAD
=======
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
>>>>>>> d799c9ac27aa201e06fbdd4b47b9c5dc5b137ec9
import Users from "./Users";
import Error from "./Error";

const ListUsers = () => {
<<<<<<< HEAD
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
=======
    const {users} = useUsers();
   console.log(users)
    return(
        <>    
        
      {users.length === 0 ? <NotFoundPage/> :
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
    }
    </>
    )
}
>>>>>>> d799c9ac27aa201e06fbdd4b47b9c5dc5b137ec9

export default ListUsers;
