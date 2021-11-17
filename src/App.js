import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import ConstractionKit from './components/ConstractionKit/ConstractionKit';
import Display from './components/Display/Display';
import Numbers from './components/Numbers/Numbers';
import Operators from './components/Operators/Operators';
import ResultButton from './components/ResultButton/ResultButton';
import Switcher from './components/Switcher/Switcher';
import { addElement, removeElement, selectConstructionMode, selectLayout, switchMode } from './redux/constructionSlice';

function App() {
  const [grab, setGrab] = useState(null)
  const dispatch = useDispatch()
  const constructionMode = useSelector(selectConstructionMode)
  const layout = useSelector(selectLayout)
  const onSwitch = () => dispatch(switchMode())


  return (
    <div className="App">
      <div className="container">
        { constructionMode && <ConstractionKit layout={layout}  /> }
      
        <div className="right">
          <Switcher mode={constructionMode} onSwitch={onSwitch}/>
          <Calculator layout={layout} constructionMode={constructionMode}/>
        </div>
      </div>
    </div>
  );
}

export default App;
