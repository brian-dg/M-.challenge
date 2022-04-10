import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
 import Formulario from './components/Formulario';
 import ListUsers from './components/ListUsers'
 import { UsersProvider } from './context/UsersProvider';
 import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <UsersProvider>
    <header className='py-5'>
      <h1>Buscador de Usuarios</h1>
    </header>

    <Container>
    
    <Formulario/>
    <ListUsers/>
    </Container>
    </UsersProvider>
  );
}

export default App;
