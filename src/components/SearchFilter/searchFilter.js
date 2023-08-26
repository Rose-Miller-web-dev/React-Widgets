import React, { useState } from "react";

export default function SearchFilter() {

    const cafeMenu =[
        {
            name: "panakuta",
            price: 12
        },
        {
            name: "cheese cake",
            price: 33
        },
        {
            name: "ice cream",
            price: 45
        },
        {
            name: "ice latte",
            price: 67
        },
        {
            name: "ice Americano",
            price: 98
        },
        {
            name: "Essperso",
            price: 102
        },
    ]

    const [search , setSearch] = useState('')

    return(
        <>

            <form className="form-control">
                <label>Search item</label>
                <input className="input-group" type={Text} value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>

            <div className="container mt-5">
                <table className="table table-border table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cafeMenu.filter((item) => {
                                return search === '' ? item : 
                                item.name.toLowerCase().includes(search) ||
                                item.price.toString().includes(search)
                            }).map
                            ((item , index) => {

                                return(
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}