import React, { useState } from "react"
import { useEffect } from "react";

export default function ProgBar() {
    const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
	},[filled, isRunning])

  return (
	  <body>
		  <div className="progressbar">

			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "pink",
				  transition:"width 0.5s"
			  }}></div>

			  <span className="progressPercent">{ filled }%</span>
		  </div>
		  <button className="btn text-white" onClick={() => {setIsRunning(true)}}>Run</button>
	</body>
  )
}