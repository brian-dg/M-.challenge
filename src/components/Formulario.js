import { useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { Button, InputGroup, Form, Row, Col, Alert } from "react-bootstrap";
import useUsers from "../hooks/useUser";


const Formulario = () => {
  const [search, setSearch] = useState({
    nombre: "",
  });
  const [alert, setAlert] = useState("");
  const { obteniendoUsers } = useUsers();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(search).includes('react')){
      setAlert('react es una busqueda no permitida');
      return;
    }
    if (Object.values(search.nombre).length < 4) {
      setAlert("Debe contener al menos 4 caracteres");
      return;
    }
    
    setAlert("");
    obteniendoUsers(search.nombre);
    navigate("usuarios");
  };
  return (
    <>
      
      <Form onSubmit={handleSubmit}>
        {alert && (
          <Alert variant="danger" className="text-center">
            {alert}
          </Alert>
        )}
        <Row className="row justify-content-center">
          <Col md={10}>
            <InputGroup className="mb-3">
              <Form.Control
                id="nombre"
                type="text"
                placeholder="Ingrese el nombre"
                name="nombre"
                value={search.nombre}
                onChange={(e) =>
                  setSearch({
                    ...search,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <Button
                variant="primary"
                className=" mx-2"
                type="submit"
              >
                Buscar
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Form>

      <Home/>
    </>
  );
};

export default Formulario;
