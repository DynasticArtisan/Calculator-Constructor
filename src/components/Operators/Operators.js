import './operators.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus, multi, degree } from '../../redux/calculatorSlice'
import classNames from 'classnames/bind'
import { selectConstructionMode } from '../../redux/constructionSlice'

const Operators = () => {
    const dispatch = useDispatch()
    const constructor = useSelector(selectConstructionMode)
    const onClickHandler = (action) => {
            dispatch(action())    
    }

    return (
        <div className={classNames('operators', {'edit-mode': constructor })}>
            <div className="operators__item" onClick={()=>onClickHandler(degree)}>/</div>

            <div className="operators__item" onClick={()=>onClickHandler(multi)}>X</div>

            <div className="operators__item" onClick={()=>onClickHandler(minus)}>-</div>

            <div className="operators__item" onClick={()=>onClickHandler(plus)}>+</div>
        </div>
    )
}

export default Operators
