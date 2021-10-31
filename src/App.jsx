import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';    
import Heroe from './components/Heroe';
import Inicio from './components/Inicio';
import ListadoHeroes from './components/ListadoHeroes';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRouteHeroe from './components/PrivateRouteHeroe';
import PrivateRouteListadoHeroes from './components/PrivateRouteListadoHeroes';
import PrivateRouteLogin from './components/PrivateRouteLogin';
import LoginProvider from './context/LoginProvider';


function App() {
  return (
    <LoginProvider>
      <Router>
        <Navbar />

        <Switch>
          
          <PrivateRouteHeroe path='/heroes/:name' component={Heroe}/>          
          
          <PrivateRouteListadoHeroes path='/heroes' component={ListadoHeroes} />

          <PrivateRouteLogin path='/login' component={Login} />
          
          <Route path='/' exact>
            <Inicio />
          </Route>

        </Switch>

      </Router>
    </LoginProvider>
  );
}

export default App;
