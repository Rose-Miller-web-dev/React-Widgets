import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { useForm, handleSubmit } from "react-hook-form";

export default function EditHook() {

    const little_women = [
        {name: 'Meg', age: 16},
        {name: 'Jo', age: 15},
        {name: 'Beth', age: 13},
        {name: 'Amy', age: 12},
    ]

    const {register, handleSubmit, setValue, getValues} = useForm()

    const [list, setList] = useState(little_women)
    const [index, setIndex] = useState()

    function editData(i) {
        let {name, age} = list[i]
        setValue('name', name)
        setValue('age', age)
        setIndex(i)

    }

    const onSubmit = (data) => {
        let name = getValues('name')
        let age = getValues('age')
        console.log(name, age, '#data')

        const updatedList = [...list]
        updatedList.splice(index, 1, {name: name, age: age})
        setList(updatedList)
    }

    return(
        <>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        list.map(
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
                <input className="input-group m-2 w-50" {...register("name")}></input>
                <input className="input-group m-2 w-50" {...register("age")}></input>
                <input className="btn btn-primary m-2" type="submit"></input>
            </form>
        </>
    )
}