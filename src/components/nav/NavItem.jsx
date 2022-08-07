import React from 'react'

export default function NavItem(props) {
    //console.log(props)
    return (
        <li className='nav__item'><a href={`#${props.children}`}>{props.children}</a></li>
    )
}
