import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
const UsersContext = createContext()

const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([])

    const obteniendoUsers = async datos => {   
        try {          
            const url =  `https://api.github.com/search/users?q=${datos}`
            const { data } = await axios(url);
            
            setUsers(data.items)
            console.log(users)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <UsersContext.Provider
            value={{
                obteniendoUsers,
                users
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