import axios from 'axios'
import './App.css';
import react, { useState, Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Footer from './components/Footer';
function App() {


  return (
    <div className="App" >
      <Header></Header>
      <div id='ui'>
        <Input></Input>
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
