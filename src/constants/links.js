import React from "react"
import {Link} from "gatsby"

const data = [
    {
        id: 1,
        text: "Home",
        url: "/"
    },
    {
        id: 2,
        text: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        text: "Services",
        url: "/services"
    },
    {
        id: 4,
        text: "Contact",
        url: "/contact"
    },
    {
        id: 5,
        text: "Blog",
        url: "/blog"
    }
]

const tempLinks = data.map(link => {
    return (
        <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
        </li>
    )
})

export default ({styleClass}) => {
    return (
        <ul className={`nav-links ${styleClass ? styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}