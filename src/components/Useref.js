import React, {useEffect, useRef} from "react";
import { useState } from "react";

export default function Useref() {

    const [inputVal, setInputVal] = useState("")
    const previousInputVal = useRef("")

    useEffect(() => {
        previousInputVal.current = inputVal
    }, [inputVal])

    return(
        <>
        <div className="container p-5" style={{background: "#faf3a7"}}>
        <input
            className="input-group rounded-1 m-1"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            type={Text}></input>

            <h2 className="text-info mb-2">Current Value: {inputVal}</h2>
            <h2 className="text-danger">Previous Value: {previousInputVal.current}</h2>
        </div>
           
        </>
    )
}