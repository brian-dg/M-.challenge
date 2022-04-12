import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
const UsersContext = createContext()

const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [viewError,setViewError] = useState(false)
    const [search, setSearch] = useState({
        nombre: "",
      });

    const obteniendoUsers = async datos => {   
        try {          
            const url =  `https://api.github.com/search/users?q=${datos}`
            const { data } = await axios(url);
            console.log(data)
            setUsers(data.items)
<<<<<<< HEAD
=======
            
>>>>>>> d799c9ac27aa201e06fbdd4b47b9c5dc5b137ec9
        }catch(error){
            setError(error)
            setViewError(true)
        }
    }
    

    return(
        <UsersContext.Provider
            value={{
                obteniendoUsers,
                users,
                search,
                setSearch,
                error,
                viewError
            }}
        >
            {children}
        </UsersContext.Provider>
    )

}

export {
    UsersProvider
}
export default UsersContext;