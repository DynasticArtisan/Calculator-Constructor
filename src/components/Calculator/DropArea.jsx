import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { useDispatch } from 'react-redux'
import { addElement, removeElement } from '../../redux/constructionSlice'

const DropArea = ({ children, index, setOver, over, dropable, constructor  }) => {
    const dispatch = useDispatch()
    const [dragOver, setDragOver] = useState(false)

    const doubleClickHandler = () => {
        dispatch(removeElement(index))
    }

    const dragEnterHandler = () => {
        setDragOver(true)
        if(setOver){
            setOver(index)
        }
    }

    const dragLeaveHandler = () => {
        setDragOver(false)
        if(setOver && over === index){
            setOver(null)
        }
    }

    const dropHandler = () => {
        dispatch(addElement(index))
        setDragOver(false)
        if(setOver){
            setOver(null)
        }
    }

    return (
        <div className={classNames("calculator__item", { 'droparea' :dragOver || !children})}
        
            onDoubleClick = { ()=> constructor && doubleClickHandler()  }
            onDragEnter = { ()=> dropable && dragEnterHandler()}
            onDragOver = { (e) => e.preventDefault() }
            onDragLeave = { ()=> dropable &&  dragLeaveHandler() }
            onDrop = { ()=> dropable && dropHandler() }

        >
            { (!children || dragOver) && <div className={classNames("droparea__field", {"droparea__field--targeted": dragOver}) }>
                <img draggable={false} src="/DnD.svg" alt="Drop Here" />
                <span>Drug and drop</span>
                <p>Drug and drop</p>                                        
            </div>}
            {children}
        </div>

    )
}

export default DropArea
