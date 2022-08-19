import React from 'react'
import "./button.css"
import { HashLink as Link } from 'react-router-hash-link';

export default function Button(props) {
  return (
    <Link className='button' {...props}>{props.children}</Link>
  )
}
