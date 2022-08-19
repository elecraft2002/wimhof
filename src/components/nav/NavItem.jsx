import React from 'react'

export default function NavItem(props) {
    //console.log(props)
    const links = [
        "#about",
        "#facts",
        "#courses",
        "/gallery/"
    ]
    return (
        <li className='nav__item'><a href={props.url + links[props.id]}>{props.children}</a></li>
    )
}
