import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"
import React from "react"
import SortableItems from "./SortableItems"
import { useState } from "react"

export default function DndWrapper() {

    const [dessert, setDessert] = useState([
        "ice cream", "cake", "shake"
    ])

    function handleDrop(event) {
        const {active, over} = event
        if(active.id !== over.id) {
            setDessert((items) => {
                const activeIndex = items.indexOf(active.id)
                const overIndex = items.indexOf(over.id)

                return arrayMove(items, activeIndex, overIndex)
            })
        }
    }

    return(
        <>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDrop} >
                <SortableContext items={dessert} strategy={verticalListSortingStrategy}>
                    {
                        dessert.map(item => <SortableItems key={item} id={item} />)
                    }
                </SortableContext>
            </DndContext>
        </>
    )
}