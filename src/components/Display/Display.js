import React from 'react'
import { useSelector } from 'react-redux'
import { getValue, oper } from '../../redux/calculatorSlice'
import './display.css'

const Display = () => {
    const value = useSelector(getValue)
    const operation = useSelector(oper)

    return (
        <div className="display">
            <div className="display__value">
                {value}
            </div>
            {operation && <div className="display__operation">{operation}</div>}

        </div>
    )
}

export default Display
