import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { grab, selectLayout } from '../../redux/constructionSlice'
import Display from '../Display/Display'
import Numbers from '../Numbers/Numbers'
import Operators from '../Operators/Operators'
import ResultButton from '../ResultButton/ResultButton'

const ConstractionKit = ({layout}) => {

    return (
        <div className="kit">
            <KitItem name='display' component={<Display/>} used={layout.includes('display')}/>
            <KitItem name='operators' component={<Operators/>} used={layout.includes('operators')} />
            <KitItem name='numbers' component={<Numbers/>} used={layout.includes('numbers')}/>
            <KitItem name='result' component={<ResultButton/>} used={layout.includes('result')} />
        </div>
    )
}

const KitItem = ({name, component, used}) => {
    const dispatch = useDispatch()
    const [dragged, setDragged] = useState(false)

    return (
        <div className={used || dragged ? "kit__item used" : "kit__item"} 
            draggable={!used}
            onDragStart={(e)=> {
                dispatch(grab(name))
                setDragged(true)   
                }}
            onDragEnd={(e)=> {
                dispatch(grab(null))
                setDragged(false)
                }}
            >
              {component}
            </div>
    )
}

export default ConstractionKit
