import React, { useState } from "react";
import './style.css'

export default function Cal() {

    const [dispaly, setDisplay] = useState("")
    const [result, setResult] = useState("")
    const operators = ['/','*','-','+']

    const updateDisplay = (val) => {
        setDisplay(dispaly + val)

        //calculation
        if (operators.includes(val) == false) {
            setResult(eval(dispaly + val).toString())
        }
    }

    const calculateResult = () => {

        setDisplay(result)
    }

    const clearDisplay = () => {
        setDisplay("0")
    }

    const deleteLast = () => {
        let value = dispaly.slice(0, -1)
        setDisplay(value)
    }

    return(
        <>
            <div className="container">
                <div className="dispaly">
                    { dispaly || "0" }
                </div>

                <div className="operators">
                    <div className="row">
                        <div className="col-auto">
                            <button onClick={() => updateDisplay('+')} className="btn btn-primary">+</button>
                            <button onClick={() => updateDisplay('*')} className="btn btn-primary">*</button>
                            <button onClick={() => updateDisplay('-')} className="btn btn-primary">-</button>
                            <button onClick={() => updateDisplay('/')} className="btn btn-primary">/</button>
                            <button onClick={clearDisplay} className="btn btn-danger pe-5">Clear</button>
                            <button onClick={deleteLast} className="btn btn-danger pe-5">DEL</button>
                        </div>
                        
                    </div>
                </div>

                <div className="operands">
                    
                    <div className="row">
                        <div className="col-auto">
                            <button onClick={() => updateDisplay('1')} className="btn digit-btn btn-warning">1</button>
                            <button onClick={() => updateDisplay('2')} className="btn digit-btn btn-warning">2</button>
                            <button onClick={() => updateDisplay('3')} className="btn digit-btn btn-warning">3</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-auto">
                            <button onClick={() => updateDisplay('4')} className="btn digit-btn btn-warning">4</button>
                            <button onClick={() => updateDisplay('5')} className="btn digit-btn btn-warning">5</button>
                            <button onClick={() => updateDisplay('6')} className="btn digit-btn btn-warning">6</button>                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-auto">
                            <button onClick={() => updateDisplay('7')} className="btn digit-btn btn-warning">7</button>
                            <button onClick={() => updateDisplay('8')} className="btn digit-btn btn-warning">8</button>
                            <button onClick={() => updateDisplay('9')} className="btn digit-btn btn-warning">9</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-auto">
                            <button onClick={() => updateDisplay('.')} className="btn digit-btn btn-warning">.</button>
                            <button onClick={() => updateDisplay('0')} className="btn digit-btn btn-warning">0</button>
                            <button onClick={calculateResult} className="btn digit-btn btn-success">=</button>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </>
    )
}