import React from 'react'
import { useDispatch } from 'react-redux'
import './operators.css'
import { minus, plus, multi, degree } from '../../redux/calculatorSlice'
const Operators = ({active}) => {
    const dispatch = useDispatch()


    return (
        <div className='operators'>
            <div className={active ? "operators__item active" : "operators__item"} onClick={()=>active && dispatch(degree())}>
                /
            </div>
            <div className={active ? "operators__item active" : "operators__item"} onClick={()=>active && dispatch(multi())}>
                X
            </div>
            <div className={active ? "operators__item active" : "operators__item"} onClick={()=>active && dispatch(minus())}>
                -
            </div>
            <div className={active ? "operators__item active" : "operators__item"} onClick={()=>active && dispatch(plus())}>
                +
            </div>
        </div>
    )
}

export default Operators
