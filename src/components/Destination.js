import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Destination(props) {
    const locationIcon = <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
    return (
        <div className="destination-card">
            <div className="img-container">
                <img src={`../images/${props.item.img}`} alt="" className = "destination-img"/>
            </div>
            <div className="destination-content">
                <div className="location-link">
                    <h3>{locationIcon} {props.item.location}</h3>
                    <a href={`${props.item.googleURL}`}>View on google maps</a>
                </div>
                <h1 className="destination-title">{props.item.title}</h1>
                <p className="dates">{props.item.startdate} - {props.item.enddate}</p>
                <p className="about">{props.item.about}</p>
            </div>
        </div>
    )
}