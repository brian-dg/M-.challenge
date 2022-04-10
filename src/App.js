import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
 import Formulario from './components/Formulario';
 import ListUsers from './components/ListUsers'
 import { UsersProvider } from './context/UsersProvider';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <UsersProvider>
        <Routes>
        <Route path="/usuarios" element={<Formulario />}/>
        
        </Routes>
        
       {/**<Container>     
          <Formulario/>
          <ListUsers/>
        </Container> */} 
      </UsersProvider>
    </Router>
  );
}

export default App;
