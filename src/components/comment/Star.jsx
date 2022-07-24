import React from 'react'
import activeStar from "../../assets/svgs/starActive.svg"
import inactiveStar from "../../assets/svgs/starInactive.svg"

export default function Star({ active }) {
    return (
        <img src={active ? activeStar : inactiveStar} alt={active ? "active star":"inactive star"}/>
    )
}
