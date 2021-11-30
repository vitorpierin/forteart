/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Atlanta from './pages/Projects/Atlanta';
import Florenca from './pages/Projects/Florenca';
import Porto from './pages/Projects/Porto';
import Veneza from './pages/Projects/Veneza';


export default () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/quem-somos'>
        <About/>
      </Route>
      <Route path='/projetos'>
        <Projects/>
      </Route>
      <Route path='/atlanta'>
        <Atlanta/>
      </Route>
      <Route path='/florenca'>
        <Florenca/>
      </Route>
      <Route path='/porto'>
        <Porto/>
      </Route>
      <Route path='/veneza'>
        <Veneza/>
      </Route>     
      <Route path='/contato'>
        <Contact/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}