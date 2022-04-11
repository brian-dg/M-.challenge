import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react'
import axios from 'axios';

const UserDetails = () => {
   
    const { userLogin} = useParams()
    const [users,setUsers] =useState('')

  

    const getUserDetails = async () => {   
        try {          
            const url =  `https://api.github.com/search/users?q=${userLogin}`
            const { data } = await axios(url);
            setUsers(data)
           
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getUserDetails()
    },[userLogin]);


    

    return(
        <h1>{users.id}</h1>
    );
}


export default UserDetails;