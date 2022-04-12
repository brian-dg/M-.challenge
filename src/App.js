import React from "react";
import "./App.css";
<<<<<<< HEAD
=======
import Home from "./components/Home";
>>>>>>> d799c9ac27aa201e06fbdd4b47b9c5dc5b137ec9
import Header from './components/Header';
import ListUsers from "./components/ListUsers";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import NotFoundPage from "./components/NotFoundPage";
import { UsersProvider } from "./context/UsersProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <UsersProvider>
        <Header />        
        <Routes>     
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="usuarios" element={<ListUsers />} />
=======
          <Route path="/" element={<Home/>}/>                           
          <Route path="usuarios" element={<ListUsers />} />                         
>>>>>>> d799c9ac27aa201e06fbdd4b47b9c5dc5b137ec9
          <Route exact path="/usuario/:userLogin" element={<UserDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UsersProvider>
    </Router>
  );
}

export default App;
