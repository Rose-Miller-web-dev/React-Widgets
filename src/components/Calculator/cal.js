import React from "react"
import { useState } from "react"

export default function Calc() {

    const [dispaly_, setDisplay] = useState("")
    const [result, setResult] = useState("")
    const ops = ['/','*','+','-']

    const updateDisplay = val => {
        setDisplay(dispaly_ + val)
        console.log(val, 'val', dispaly_, 'display')

        if (!ops.includes(val)) {
            setResult(eval(dispaly_ + val).toString())
        }
    }
   
    const createDigit = () => {
      const digits = []
    
      for (let i = 1 ; i < 10 ; i++) {
        digits.push(
          <button onClick={() => updateDisplay(i.toString())}
           key={i}>{i}</button>
        )
      }
    
      return digits
    }

    const deleteLast = () => {
        if (dispaly_ == '') {
            return
        }
        const val = dispaly_.slice(0, -1)
        setDisplay(val)
    }
    
    return(
      <>
        <div className="calculator">
            <div className="dispaly">    
              { result ?  <span>({result})</span> : ""} &nbsp;
              { dispaly_ || "0" }
            </div>
    
            <div className="operators">
              <button  onClick={() => updateDisplay('/')}>/</button>
              <button  onClick={() => updateDisplay('*')}>*</button>
              <button  onClick={() => updateDisplay('+')}>+</button>
              <button  onClick={() => updateDisplay('-')}>-</button>
    
              <button  onClick={() => {setDisplay(result); setResult("")}}>=</button>
              <button onClick={deleteLast}>DEL</button>
            </div>
    
            <div className="digits">
                { createDigit() }
                <button onClick={() => updateDisplay('0')}>0</button>
                <button onClick={() => updateDisplay('.')}>.</button>
            </div>
        </div>
      </>
    )
}
