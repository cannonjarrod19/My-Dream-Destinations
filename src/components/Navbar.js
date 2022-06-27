import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    const fontAwesomeIcon = <FontAwesomeIcon icon={faEarthAmericas} />
    return (
        <div>
            <nav className="nav">
                <p className="nav-icon">{fontAwesomeIcon}</p>
                <h3 className="nav-title">My Dream Destinations</h3>
            </nav>
        </div>
    )
}