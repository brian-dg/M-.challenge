import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { formatearFecha } from "../helpers/index";
import axios from "axios";
import Error from "./Error";

const UserDetails = () => {
  const { userLogin } = useParams();

  const [users, setUsers] = useState("");
  const [viewError, setViewError] = useState(false);
  const [error, setError] = useState("");

  const getUserDetails = async () => {
    try {
      const url = `https://api.github.com/users/${userLogin}`;
      const { data } = await axios(url);
      setUsers(data);
    } catch (error) {
      setError(error);
      setViewError(true);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [userLogin]);

  return (
    <div className="Card">
      {viewError ? <Error value= {{error}} /> : 
      <div className="card-user">
        <div className="seccion-avatar">
          <div className="avatar">
            <div className="img-avatar">
              <img src={users.avatar_url} alt="" />
            </div>
          </div>
          <div className="datos-redes">
            <div className="datos-user">
              <span>{users.followers}</span>
              <span> Seguidores</span>
            </div>
            <div className="datos-user">
              <span>{users.following}</span>
              <span> Seguidos</span>
            </div>
          </div>
        </div>

        <div className="seccion-datos">
          <h5>ID: {users.id}</h5>
          <h5>Login: {users.login}</h5>
          <h5>Nombre: {users.name}</h5>
          <h5>Localizacion: {users.location}</h5>
          <p>
            <i className="fas fa-map-marker-alt"></i> Fecha de creacion:{" "}
            {formatearFecha(users.created_at)}
          </p>
        </div>
      </div>
    }
    </div>
  );
};

export default UserDetails;
