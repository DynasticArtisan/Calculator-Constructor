import './App.css';
import React from 'react';
import {  useSelector } from 'react-redux';
import { selectConstructionMode } from './redux/constructionSlice';

import Calculator from './components/Calculator/Calculator';
import ConstructionKit from './components/ConstructionKit/ConstructionKit';
import Switcher from './components/Switcher/Switcher';


function App() {
  const constructor = useSelector(selectConstructionMode)

  return (
    <div className="App">
      <div className="container">

        { constructor && <ConstructionKit/> }  

        <div className="main">
          <Switcher />
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
