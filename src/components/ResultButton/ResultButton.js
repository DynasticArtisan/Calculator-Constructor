import React from 'react'
import { useDispatch } from 'react-redux'
import { define } from '../../redux/calculatorSlice'
import './resultButton.css'
const ResultButton = ({active}) => {
    const dispatch = useDispatch()
    return (
        <div className={active ? 'resultButton active' : 'resultButton'} onClick={()=> active && dispatch(define())}>
            =
        </div>
    )
}

export default ResultButton
