import './calculator.css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {  grabbed, selectConstructionMode, selectLayout } from '../../redux/constructionSlice'

import DropArea from './DropArea'
import { KIT } from '../ConstructionKit/ConstructionKit'

const Calculator = () => {
    const layout = useSelector(selectLayout)
    const constructor = useSelector(selectConstructionMode)
    const dragEl = useSelector(grabbed)
    const [overEl, setOverEl] = useState(null)

    return (
        <div className="calculator">
            {
              dragEl=='display' && <DropArea index={0} dropable/>
            }

            {
              layout.map( (item, index) => <DropArea key={index} index={index} setOver={setOverEl} over={overEl} dropable={!(dragEl==='display' || item==='display')} constructor={constructor}>
                                            {KIT.find(el => el.name == item ).component}
                                          </DropArea> )
            }

            {
              layout.length < 4 && constructor && dragEl!=='display' && overEl===null && <DropArea index={layout.length} dropable/>
            }
            
        </div>
    )
}

export default Calculator
