import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Template } from './components/MainComponents';
import Routes from './Routes';

import Footer from './components/partials/Footer';
import './App.css'





function App() {
  return (
    <BrowserRouter>
      <Template>
        <Routes/>
        <Footer/>
      </Template>
    </BrowserRouter>
  );
}

export default App;
