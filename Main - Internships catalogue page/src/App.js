import './App.css';
import React from 'react';
import Cards_Component from './Cards/Cards_Component.js';
import { Route, Link } from 'react-router-dom';
import Application from './Application/MyApplication.js'

function App() {
  return (
    <>
      {/*
      Here we use router to render the pages appropriately.
       */}

      <Route exact path="/" component={Cards_Component} />    
      <Route exact path="/application" component={Application} />    
      
    </>
  );
}

export default App;