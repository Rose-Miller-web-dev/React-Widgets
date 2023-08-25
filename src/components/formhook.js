import React, {useState} from "react"
import { useForm, SubmitHandler } from "react-hook-form"

export default function FormHook() {

    const little_women = [
        {name: 'Meg', age: 16},
        {name: 'Jo', age: 15},
        {name: 'Beth', age: 13},
        {name: 'Amy', age: 12},
    ]

    const { register, handleSubmit, getValues, setValue } = useForm()

    const [list, setList] = useState(little_women)
    const [inputData, setInputData] = useState({name:"", age:""})
    let [index, setIndex] = useState()

    function editData(i) {
        let {name, age} = list[i]
        setInputData({name, age})
        setIndex(i)
        setValue('name', name)
        setValue('age', age)
    }

    const onSubmit = (data) => {
        let a = getValues('name')
        let b = Number(getValues('age'))
        
        const updatedList = [...list];
        updatedList.splice(index, 1, { name: a, age: b });
        setList(updatedList);
        console.log(list)
    }
   
  return (

    <div className="container p-2">
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            list && list.map(
                                (item, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>
                                                <button
                                                onClick={() => editData(i)}
                                                className="btn btn-warning">Edit</button>

                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>

                </table>

                <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} />
                        <input {...register("age")} />
                        <input className="btn" type="submit" />
                </form>

            </div>
  )
}