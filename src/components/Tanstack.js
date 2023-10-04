import React from 'react'
import { useState } from 'react'

export default function Tanstack() {

    const [tableDta, setTableData] = useState([
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
    ])

    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage, setitemPerPage] = useState(4)

    const lastIndex = currentPage * itemPerPage
    const firstIndex = lastIndex - itemPerPage
    const currentPageItems = tableDta.slice(firstIndex, lastIndex)
    const pages = []
    for (let i = 1 ; i < tableDta.length / itemPerPage + 1 ; i++ ) {
        pages.push(i)
    }

    //search
    const [search, setSearch] = useState('')

    //sort
    const [savedData, setSavedData] = useState([
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
    ])

    const [isSorted, setIsSorted] = useState(false)
    const [sortedData, setSortedData] = useState([])

    const sortTable = () => {
        if(isSorted == false) {
            const sortedData = [...tableDta]
            sortedData.sort((a, b) => a.price - b.price)
            setTableData(sortedData)
            setIsSorted(true)
        }

        else {
            setTableData(savedData)
            setIsSorted(false)
        }
    }

    return(
        <>
            <div className='container pt-4'>

                <div className='container'>
                    <input type='text' placeholder='search...' 
                    onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className='bg-white p-2 m-3' onClick={sortTable}>
                        {isSorted ? 'unsort' : 'sort'}
                    </button>
                </div>

                <table className='table table-border table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentPageItems.filter((item) => {
                                return search === '' ? item :
                                item.name.toLowerCase().includes(search) ||
                                item.price.toString().includes(search)
                            })
                            
                            .map((item, index) => {
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

                <nav>
                    {
                        pages.map((page, index) => {
                            return(
                                <button
                                onClick={() => setCurrentPage(page)}
                                key={index} className='bg-white m-2 p-2'>
                                    {page}
                                </button>
                            )
                        })
                    }
                </nav>
            </div>
        </>
    )
}