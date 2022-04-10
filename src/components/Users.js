const Users = ({user}) => {
    return (
        <>
          
                <tr className="text-left">
                    <td className="text-left">{user.id}</td>
                    <td className="text-left">{user.login}</td>               
                </tr>         
           
        </>
    )
}

export default Users;