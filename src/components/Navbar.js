import React from "react"
import PageLinks from "../constants/links"
import me from "../images/me.png"
import { FaAlignRight } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <img className="me" src={me} alt="logo" />
                <div className="title-container">
                    <h1 className="title">Will Constable</h1>
                    <p className="desc">Freelance web and software developer</p>
                </div>
                <button type="button" className="toggle-btn">
                    <FaAlignRight></FaAlignRight>
                </button>
            </div>
            <div className="nav-header">
                <PageLinks styleClass="nav-links"></PageLinks>
            </div>
    </nav>
    )
}

export default Navbar