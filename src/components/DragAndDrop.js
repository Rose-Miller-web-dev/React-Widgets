import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import { useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import  SortableItem  from './SortableItem'

export default function DragDrop() {
    
    const [lang, setLang] = useState([
        "Javascript", "Typescipt", "C++"
    ])

    const onDragEnd = (event) => {
        console.log("onDragEnd", event)
    }

    return(
        <>
            <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            >
                <div className='container p-3 text-align-center'>
                    <h1>My Besties</h1>

                    <SortableContext
                    items={lang} strategy={verticalListSortingStrategy}
                    >
                        {
                            lang.map(language => <SortableItem key={language} id={language} />)
                        }
                    </SortableContext>

                </div>

            </DndContext>
        </>
    )

    function handleDragEnd(event) {
        
        const {active, over} = event
        if(active.id !== over.id) {
            setLang((items) => {
                const activeIndex = items.indexOf(active.id)
                const overIndex = items.indexOf(over.id)

                return arrayMove(items, activeIndex, overIndex)
            })
        }
    }
}
