import './resultButton.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { define } from '../../redux/calculatorSlice'
import classNames from 'classnames/bind'
import { selectConstructionMode } from '../../redux/constructionSlice'

const ResultButton = () => {
    const dispatch = useDispatch()
    const constuctor = useSelector(selectConstructionMode)
    return (
        <div className={classNames('resultButton', {'edit-mode': constuctor})} onClick={()=>dispatch(define())}>
            =
        </div>
    )
}

export default ResultButton
