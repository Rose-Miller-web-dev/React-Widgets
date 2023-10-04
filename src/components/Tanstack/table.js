import { useState, useEffect } from "react"

export default function Table() {
    const data = [
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
    ]

    const [tableData , setTableData] = useState(data)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(5)
    const [isSorted, setIsSorted] = useState(false)
    const [search, setSearch] = useState('')
    const [savedData, setSavedData] = useState(tableData)

    const lastIndexItem = currentPage * itemPerPage
    const firstItemIndex = lastIndexItem - itemPerPage
    const currentPageItems = tableData.slice(firstItemIndex, lastIndexItem)

    const pages = []

    const sortTable = () => {
        if (isSorted == false) {
            const sortedData = [...tableData]
            sortedData.sort((a, b) => a.price - b.price)
            setTableData(sortedData)
            setIsSorted(true)
        }

        else {
            setTableData(savedData)
        }
        
    }

    for ( let i = 1 ; i < tableData.length / itemPerPage + 1 ; i++) {
        pages.push(i)
    }

    return(
        <>
            <div className="container pt-4">
                <div className="d-flex">
                    <input type="text" value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                    className="input-group my-4 p-2 " placeholder="search..." />

                    <button className="bg-white m-2 py-0 px-4   "
                    onClick={sortTable}>
                        {isSorted ? 'unsort' : 'sort'}
                    </button>
                </div>
                
                <table className="table table-border table-striped">
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
                                .map(item => {
                                    return(
                                        <tr>
                                            <td>
                                                <p key={item.id}>{item.name}</p>
                                            </td>

                                            <td>
                                                <p key={item.id}>{item.price}</p>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                         
                    </tbody>
                </table>

                <nav>
                    {
                        pages.map((page, index) => {
                            return (
                                <button className="m-3 bg-white rounded-2"
                                onClick={() => setCurrentPage(page)}
                                key={index}>{ page }</button>
                            )
                        })
                    }
                </nav>

            </div>
        </>
    )
}
