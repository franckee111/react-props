import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fragment>
          <Titulo nombre="Francisco" apellido="Estrada" />
          <Titulo nombre="Jesús" apellido="Esparza" />
        </Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
