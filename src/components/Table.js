import React from "react";
import { useState } from "react";

export default function Table() {

    const initials = [
        {name: String = "rose",
        age: 1},
        {name: String = "hannah",
        age: 2},
    ]

    let [array, setArray] = useState(initials)
    let [inputData, setInputData] = useState({name:"", age:""})
    let [index, setIndex] = useState()
    let [bool, setBool] = useState(false)
    let {name, age} = inputData

    function data(e) {
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    function addInputData() {
        setArray([...array, {name, age}])
        console.log(inputData)
        setInputData({name:"", age:""})
    }

    function deleteData(i) {
        let total = [...array]
        total.splice(i, 1)
        setArray(total)
    }

    function editData(i) {
        let {name, age}=array[i]
        setInputData({name, age})
        setBool(true)
        setIndex(i)
    }

    function updateinfo() {
        let total = [...array]
        total.splice(index, 1, {name, age})
        setArray(total)
        setBool(false)
        setInputData({name:"", age:""})
    }

    return(
        <>
        <div className="container">

            <input className="input-group m-1" type={Text} value={inputData.name || ""} name="name" autoComplete="off" 
            placeholder="name" onChange={data}></input>

            <input className="input-group m-1" type={Number} value={inputData.age ||""} name="age" autoComplete="off" 
            placeholder="age" onChange={data}></input>

            <button className="btn btn-primary" onClick={updateinfo}>update data</button>

            <br></br>

            <table className="table table-border">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>edit</th>
                        <th>delete</th>
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
                                        
                                        <td> <button className="btn btn-danger"
                                        onClick={()=>deleteData(i)}
                                        >delete</button> </td>
                                       
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>

        </div>
        </>
    )
}