import React from "react"
import {FaFacebookSquare} from "react-icons/fa"
import {AiOutlineInstagram} from "react-icons/ai"

const data = [
    {
        id: 1,
        icon: <FaFacebookSquare />,
        url: "www.facebook.com"
    },
    {
        id: 2,
        icon: <AiOutlineInstagram />,
        url: "www.instagram.com"
    }
]

const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} target="_blank">
                {link.icon}
            </a>
        </li>
    )
})

export default ({styleClass}) => {
    return (
        <ul className={styleClass ? styleClass : ""}>{links}</ul>
    )
}