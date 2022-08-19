import React from 'react'
import { Link } from "react-router-dom";

export default function NavItem(props) {
    //console.log(props)
    const links = [
        "#about",
        "#facts",
        "#courses",
        "/gallery/"
    ]
    return (
        <li className='nav__item'>
            {/* <Link to={props.url + links[props.id]}>{props.children}</Link> */}
        </li>
    )
}
