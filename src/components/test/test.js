import React from "react"
import './test.css'

export default function Test() {

    const switchTheme = (e) => {

        if(e.target.checked) {
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }

        else {
            document.querySelector('body').setAttribute('data-theme', 'light')
        }

    }

    return(
        <>
        <div className="wrapper">
        <label className="switch">
        <input type="checkbox" onChange={switchTheme} />
        <span className="slider round"></span>
        </label>
        </div>
        </>
    )
}