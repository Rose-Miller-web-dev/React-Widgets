import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {

    const [photos , setphotos] = useState([])

    useEffect(async() => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
      setphotos(response.data)
    } , [])

    return (
      <>
        <ul className="list-group">
            {
              photos.map((photo, index) => {
                return (

                  <li className="list-group-item" key={index} >
                      <img src={photo.thumbnailUrl} />
                  </li>
                  
                  )
                }
              ) 
            }
        </ul>
      </>
    )
}