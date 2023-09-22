import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export default function SortableItems(props) {

    const {
        attributes, listeners, setNodeRef, transform, transition
    } = useSortable({id: props.id})

    const style = {
        transform: CSS.Transform.toString(transform), transition
    }

    return(
        <>
            <ol start={style} className="list-group" ref={setNodeRef} {...attributes} {...listeners}>
                <li className="list-group-item">
                    {props.id}
                </li>
            </ol>
        </>
    )
}