import React from 'react'
import './toggle.css'

export default function ToggleSwitch() {

    const toggleTheme = (e) => {
        if (e.target.checked) {
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }

        else {
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    }

    return(
        <>
            <div className='containers'>

                <label className="switch">
                <input type="checkbox" onChange={toggleTheme} />
                <span className="slider round"></span>
                </label>

            </div>
        </>
    )
}