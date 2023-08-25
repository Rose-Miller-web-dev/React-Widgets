import axios from "axios";
import React from "react";

export default function AxiosApp() {

    const apiUrl = "https://api.quotable.io/random"

    axios.get(apiUrl).then(
        response => {
            console.log(response.data.content)
        }
    ).catch(err => {
        console.log(err)
    })

    return (
        <>

        </>
    )
}