import './constructionKit.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { grab, selectLayout } from '../../redux/constructionSlice'
import classNames from 'classnames/bind'

import Display from '../Display/Display'
import Numbers from '../Numbers/Numbers'
import Operators from '../Operators/Operators'
import ResultButton from '../ResultButton/ResultButton'

export const KIT = [
    { name: 'display', component: <Display/> },
    { name: 'operators', component: <Operators/> },
    { name: 'numbers', component: <Numbers/> },
    { name: 'result', component: <ResultButton/> },
]

const KitItem = ({name, component, used}) => {
    const dispatch = useDispatch()
    const [dragged, setDragged] = useState(null)

    const dragHandler = ( element ) => {
            dispatch(grab(element))
            setDragged(element)
    }

    return (
        <div className={classNames("kit__item", {"kit__item--used":used || dragged})} 
            draggable={!used}
            onDragStart={(e)=> dragHandler(name)}
            onDragEnd={(e)=> dragHandler(null)}
            >
              {component}
            </div>
    )
}

const ConstructionKit = () => {
    const layout = useSelector(selectLayout)
    return (
        <div className="kit">
            {
                KIT.map((element) => <KitItem { ...element } used={layout.includes(element.name)}/> )
            }
        </div>
    )
}

export default ConstructionKit
