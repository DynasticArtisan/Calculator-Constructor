import './switcher.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectConstructionMode, switchMode } from '../../redux/constructionSlice'
import classNames from 'classnames/bind'

const Switcher = () => {
    const constructor = useSelector(selectConstructionMode)
    const dispatch = useDispatch()
    const onSwitch = () => dispatch(switchMode())
    
    return (
        <div className='switcher'>
            <div className={classNames('switcher__button', {'switcher__button--active': !constructor})} onClick={constructor && onSwitch}>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7678 8.76777C11.2366 8.29893 11.5 7.66304 11.5 7C11.5 6.33696 11.2366 5.70107 10.7678 5.23223C10.2989 4.76339 9.66304 4.5 9 4.5C8.33696 4.5 7.70107 4.76339 7.23223 5.23223C6.76339 5.70107 6.5 6.33696 6.5 7C6.5 7.66304 6.76339 8.29893 7.23223 8.76777C7.70107 9.23661 8.33696 9.5 9 9.5C9.66304 9.5 10.2989 9.23661 10.7678 8.76777Z" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.04834 6.99999C2.11001 3.61916 5.26917 1.16666 9.00001 1.16666C12.7317 1.16666 15.89 3.61916 16.9517 6.99999C15.89 10.3808 12.7317 12.8333 9.00001 12.8333C5.26917 12.8333 2.11001 10.3808 1.04834 6.99999Z" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Runtime</div>
            <div className={classNames('switcher__button', {'switcher__button--active': constructor})} onClick={!constructor && onSwitch}>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 8.33334L1.16666 5.00001L4.5 1.66668M9.5 1.66668L12.8333 5.00001L9.5 8.33334" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Constructor
            </div>
        </div>
    )
}

export default Switcher
