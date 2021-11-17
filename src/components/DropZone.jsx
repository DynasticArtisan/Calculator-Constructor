import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addElement, grabbed, removeElement, selectConstructionMode, setTarget } from '../redux/constructionSlice'

const DropZone = ( { item, index, children, hover } ) => {
    const dragged = useSelector(grabbed)
    const dropable = item !== 'display' && dragged !== 'display'
    const [over, setOver] = useState(false)
    const constructionMode = useSelector(selectConstructionMode)
    const dispatch = useDispatch()

    const dragEnterHandler = (e) => {
        e.preventDefault()
        setOver(true)
        hover(true)
      }
    const dragOverHandler = (e) => {
        e.preventDefault()
        hover(true)
    }
      const dragLeaveHandler = (e) => {
        setOver(false)
        hover(false)

      }
  
      const dropHandler = (e) => {
        e.preventDefault()
        dispatch(addElement(index))
        setOver(false)
        hover(false)
      }

      const doubleClickHandler = () => {
        dispatch(removeElement(item))
      }


    return (
        <div className={over ? "dropzone over" :"dropzone"} onDoubleClick={()=>constructionMode && doubleClickHandler()}
            onDragEnter={(e)=>constructionMode && dropable && dragEnterHandler(e)}
            onDragOver={(e)=>constructionMode && dropable && dragOverHandler(e)}
            onDragLeave={(e)=>constructionMode && dropable && dragLeaveHandler(e)}
            onDrop={(e)=>constructionMode && dropable && dropHandler(e)}
        >

            { 
                over && <div className="dropzone__target over pointerNone" onDragLeave={(e)=>e.stopPropagation()}>
                    <p>Drug and drop</p>
                </div> 
            }
            <div className={constructionMode ? "calculator__item" :"calculator__item active"}>
            {children}
            </div>
            
        </div>
    )
}

export default DropZone
