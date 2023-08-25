import React from "react";
import './card.css'

const Card = ({title , description , imgSrc}) => {

    return(
        <>
            <div className="card">

                <div className="card-header"></div>

                <div className="card-body">
                    <img src={imgSrc} />
                </div>

                <div className="card-footer">
                    <h3>{title}</h3>
                    <small>{description}</small>
                </div>

            </div>
        </>
    )
}

export default Card