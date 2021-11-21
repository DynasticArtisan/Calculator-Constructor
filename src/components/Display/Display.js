import './display.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { getValue, oper } from '../../redux/calculatorSlice'
import classNames from 'classnames/bind'

const Display = () => {
    const operation = useSelector(oper)
    let value = useSelector(getValue)

    if(value.length > 16) {
        value = "That's too Huge!"   
    }

    return (
        <div className="display">
            <div className={ classNames("display__value", {"display__value--smallText" : value.length > 8})}>
                {value}
            </div>
            { operation && <div className="display__operation">{operation}</div> }

        </div>
    )
}

export default Display
