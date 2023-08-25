import React, { useEffect, useState , useRef } from "react";

export default function StopWatch() {

    const [time, setTime] = useState(0)

    useEffect(() => {
        timeInc()
        return () => clearInterval(timeHandler.current)
    })

    let timeHandler = useRef()
    function timeInc() {
        timeHandler.current = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        } , 1000)
    }

    return(
        <div className="pt-5 ps-5 ms-5">
            <h1 className="m-4">{time}</h1>

            <button
             onClick={() => setTime(0)}
             className="btn btn-info m-2">Restart</button>
            
            <button
            onClick={() => clearInterval(timeHandler.current)}
            className="btn btn-danger m-2">Pause</button>
        </div>
    )

}