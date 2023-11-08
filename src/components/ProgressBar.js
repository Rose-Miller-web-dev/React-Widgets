import React from "react"
import { useEffect } from "react";
import { useState } from "react"

export default function ProgBar() {

    const [filled, setFilled] = useState(0);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        if(filled < 100 && loading) {
            setTimeout(() => setFilled(prev => prev+=5), 50)
        }
    }, [filled, loading])

    return(
        <body>
            <div className="progressbar">

                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    backgroundColor: "pink",
                    transition: "width 0.5s"
                }}>

                </div>

                <span className="progressbarPercentage">
                    {filled} %
                </span>
            </div>

            <button className="btn text-white" onClick={() => {isLoading(true)}}>Start!</button>
        </body>
    )
}