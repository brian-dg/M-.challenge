import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
 import Formulario from './components/Formulario';
 import ListUsers from './components/ListUsers';
 import UserDetails from './components/UserDetails';
 import NotFoundPage from './components/NotFoundPage';
 import { UsersProvider } from './context/UsersProvider';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <UsersProvider>
      <Formulario/>
        <Routes>

        <Route path="/usuarios" element={<ListUsers/>}/>
        <Route exact path = '/usuario/:userLogin' element={ <UserDetails/> }/>
        <Route path="*" element={<NotFoundPage/>}/>
        
        </Routes>
      </UsersProvider>
    </Router>
  );
}

export default App;
