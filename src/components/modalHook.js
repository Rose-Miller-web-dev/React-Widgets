import React from "react";
import './../index.css'

const ModalHook = ({openModal, closeModal}) => {

    if (openModal == false) return null

    return(
        <>
            <div className="modalContent">

                <p className="closeTag" onClick={closeModal}>Close</p>
                <img src="./What are you to shoto todoroki_.jpeg" />

            </div>
        </>
    )
}

export default ModalHook