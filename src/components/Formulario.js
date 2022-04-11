import { useState } from 'react';
import ListUsers from './ListUsers';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, InputGroup,Form, Row, Col, Alert } from "react-bootstrap";
import useUsers from '../hooks/useUser';
import Header from './Header';

const Formulario = () => {
    const [search,setSearch] = useState({
        nombre:''
    })
    const [alert,setAlert] = useState('')
    const {obteniendoUsers} = useUsers()

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('usuarios')
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(search).includes('')) {
            setAlert('Debe contener al menos 4 caracteres')
            return
        }
        setAlert('')       
        obteniendoUsers(search.nombre)
    }
    return(
        <>
            <Header/>
            <Form 
               onSubmit={handleSubmit}
            >
                {alert && <Alert variant='danger' className='text-center'>{alert}</Alert>}
                <Row>
                    <Col md={8}>
                        <InputGroup className="mb-3">
                          

                            <Form.Control
                                id="nombre" 
                                type="text"
                                placeholder="Ingrese el nombre"
                                name="nombre"
                                value={search.nombre}                               
                                onChange={e => setSearch({
                                    ...search,
                                    [e.target.name] : e.target.value
                                })}/> 

                           
                                <Button onClick={handleClick} variant="primary" className=" my-1" type="submit">
                                    Buscar
                                </Button>
                            
                            
                  
                        </InputGroup>
                    </Col>                 
                </Row>
            </Form>
        </>
    )
}

export default Formulario;