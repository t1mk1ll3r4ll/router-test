import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom"
import Civilization from './components/Civilization'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
function App() {
  return (
    <Router>
    <div className="container">
      <div className="btn-group">
        <NavLink to="/" className="btn btn-dark mt-5 " activeClassName="active"> 
          Inicio
        </NavLink>
        <Link to="contacto" className="btn btn-dark mt-5 ">
          Contacto
        </Link>
        <NavLink to="/nosotros" className="btn btn-dark mt-5" activeClassName="active">
          Nosotros
        </NavLink>
      </div>
      <h1>Navbar</h1>
      <hr/>
      <Switch>
        <Route path="/nosotros/:id">
          <Civilization></Civilization>
        </Route>
        <Route path="/contacto">
         <Contacto></Contacto>
        </Route>
        <Route path="/nosotros">
          <Nosotros></Nosotros>       
        </Route>
        <Route path="/">
          <Inicio></Inicio>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
