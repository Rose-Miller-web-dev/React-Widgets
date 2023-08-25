import React from "react";
import { useState } from "react";

export default function EditState() {

    const initials = [
        {name: String = "Joe",
        age: 1},
        {name: String = "Kathie",
        age: 2},
        {name: String = "Emma",
        age: 1},
        {name: String = "Bethie",
        age: 2},
    ]

    let [array, setArray] = useState(initials)
    let [inputData, setInputData] = useState({name:"", age:""})
    let [index, setIndex] = useState()
    let {name, age} = inputData

    function data(e) {
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    function editData(i) {
        let {name, age}=array[i]
        setInputData({name, age})
        setIndex(i)
    }

    function updateinfo() {
        let total = [...array]
        total.splice(index, 1, {name, age})
        setArray(total)
        setInputData({name:"", age:""})
    }

    return(
        <>
        <div className="container">
          
            <br></br>

            <table className="table table-border">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>edit</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        array && array.map(
                            (item, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>

                                        <td> <button className="btn btn-warning"
                                        onClick={() =>editData(i)}
                                        >Edit</button> </td>
                                        
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>

            <input className="input-group m-1" type={Text} value={inputData.name} name="name" 
            placeholder="name" onChange={data}></input>

            <input className="input-group m-1" type={Number} value={inputData.age} name="age"
            placeholder="age" onChange={data}></input>

            <button className="btn btn-primary" onClick={updateinfo}>update data</button>

        </div>
        </>
    )
}