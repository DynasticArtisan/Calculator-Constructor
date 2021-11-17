import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dotAllowed, pressNumber } from '../../redux/calculatorSlice'
import './numbers.css'

const Numbers = ({active}) => {
    const dispatch = useDispatch()
    const isDotAllowed = useSelector(dotAllowed)
    const press = (number) => {
        if(isDotAllowed || number !== ','){
            dispatch(pressNumber(number))
        }
    }

    const numbers = ['9','8','7','6','5','4','3','2','1',',','0']
    return (
        <div className='numbers'>
            {numbers.map(item => (
                <div className={active ? "numbers__item active" : "numbers__item"} onClick={()=>active && press(item)}>{item}</div>
            ))}
        </div>
    )
}

export default Numbers
