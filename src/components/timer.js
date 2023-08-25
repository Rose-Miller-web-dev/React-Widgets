import React, { useEffect, useState , useRef } from "react";

export default function Timer() {

    const [time, setTime] = useState(0)

    useEffect(() => {

        handleTimer()
        return () => clearInterval(timwe.current)

    } , [])

    let timwe = useRef()
    function handleTimer() {
        timwe.current = setInterval(() => {
            setTime((prev) => prev + 1)
        } , 1000)
    }
    
    return (

        <>
           <div>
                <h1> {time} </h1>
                <button onClick={() => setTime(0)} >Retart</button>
                <button onClick={() => clearInterval(timwe.current)}>Pause</button>
           </div>
        </>

    )
}