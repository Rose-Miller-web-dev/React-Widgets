import React from "react"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
export default function SpeechRec() {
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if(!browserSupportsSpeechRecognition) {
        return null
    }
    return(
        <>
            <div className="container">
                <div className="main-content">
                    {transcript}
                </div>
                <div className="btn-style">
                    <button>copy</button>
                    <button onClick={startListening}>start listening</button>
                    <button
                    onClick={SpeechRecognition.stopListening}
                    >stop listening</button>
                </div>
            </div>
        </>
    )
}