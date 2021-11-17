import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addElement, grabbed, removeElement, target } from '../../redux/constructionSlice'
import Display from '../Display/Display'
import DropZone from '../DropZone'
import Numbers from '../Numbers/Numbers'
import Operators from '../Operators/Operators'
import ResultButton from '../ResultButton/ResultButton'

const Calculator = ( {layout, constructionMode} ) => {
    const [over, setOver] = useState(false)
    const dispatch = useDispatch()
    const grabbedEl = useSelector(grabbed)


    return (
        <div className="calculator">
            {
              grabbedEl == 'display' && <div className="dropzone__target" 
                                                    onDragOver={(e)=>{e.preventDefault(); e.target.style.background='#DBEAFE'}}
                                                    onDragLeave={(e)=>{e.preventDefault(); e.target.style.background='none'}}
                                                    onDrop={(e)=>{ e.target.style.background='none'; dispatch(addElement(0)) }}
                                                    >
                                                      <img draggable={false} src="/DnD.svg" alt="Drop Here" />
                                                      { layout.length < 3 && <span>Drug and drop</span>}
                                                      { layout.length < 3 && <p>Drug and drop</p>}
                                                    </div>
            }
            {
              layout.map((item, index) => {
                switch (item){
                  case 'display': return <DropZone key={index} item={item} index={index} hover={setOver}>
                                            <Display/>
                                          </DropZone>

                  case 'operators': return <DropZone key={index} item={item} index={index} hover={setOver}>
                                              <Operators active={!constructionMode}/>
                                            </DropZone>

                  case 'numbers': return  <DropZone key={index} item={item} index={index} hover={setOver}>
                                            <Numbers active={!constructionMode}/>
                                          </DropZone>
                  
                  case 'result': return <DropZone key={index} item={item} index={index} hover={setOver}>
                                          <ResultButton active={!constructionMode}/>
                                        </DropZone>
              }})
            }
            {
              layout.length < 4 && constructionMode && !over && grabbedEl !== 'display' && <div className="dropzone__target" 
                                                    onDragOver={(e)=>{e.preventDefault(); e.target.style.background='#DBEAFE'}}
                                                    onDragLeave={(e)=>{e.preventDefault(); e.target.style.background='none'}}
                                                    onDrop={(e)=>{ e.target.style.background='none'; dispatch(addElement(layout.length)) }}
                                                    >
                                                    <img draggable={false} src="/DnD.svg" alt="Drop Here" />
                                                    { layout.length < 3 && <span>Drug and drop</span>}
                                                      { layout.length < 3 && <p>Drug and drop</p>}
                                                    
                                                    </div>
            }
            
        </div>
    )
}

export default Calculator
