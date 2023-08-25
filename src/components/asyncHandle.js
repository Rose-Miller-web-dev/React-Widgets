import React, { useEffect, useState } from "react";

export default function AsyncHandle() {

    const [title, setTitle] = useState("")

    async function waitFor() {
        await new Promise(resolve => setTimeout(resolve , 3000))
    }

    async function titleSetter() {
        await waitFor()
        setTitle("I've been waiting for so long")
    }

    useEffect(() => {
        titleSetter()
    }, [])

    return(
        <h2>{title}</h2>
    )
}