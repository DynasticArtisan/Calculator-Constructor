import './numbers.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dotAllowed, pressNumber } from '../../redux/calculatorSlice'
import classNames from 'classnames/bind'
import { selectConstructionMode } from '../../redux/constructionSlice'

const numbers = ['9','8','7','6','5','4','3','2','1',',','0']

const Numbers = () => {
    const dispatch = useDispatch()
    const isDotAllowed = useSelector(dotAllowed)
    const constructor = useSelector(selectConstructionMode)

    const press = (number) => {
        if(isDotAllowed || number !== ','){
            dispatch(pressNumber(number))
        }
    }

    return (
        <div className={classNames('numbers', {'edit-mode': constructor})}>
            { 
                numbers.map(item => <div className="numbers__item" onClick={()=>press(item)}>{item}</div>)            
            }
        </div>
    )
}

export default Numbers
