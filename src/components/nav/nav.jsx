import React from 'react'
import "./nav.css"
import NavItem from './NavItem'
import facebook from "../../assets/svgs/facebook.svg"
import instagram from "../../assets/svgs/instagram.svg"
import admin from "../../assets/svgs/admin.svg"

export default function Nav({navigationList}) {
  return (
    <div className='nav'>
      <ul  className='nav__list'>
        {navigationList ? navigationList.data.list.map((item, i) => {
          return <NavItem item={item.cell[0].text} key={i} />
        }) : null}
      </ul>
      <ul className='nav__list'>
        <li className='nav__item'><a href=''><img src={facebook} alt="facebook" /></a></li>
        <li className='nav__item'><a href=''><img src={instagram} alt="instagram" /></a></li>
        <li className='nav__item'><a href='https://prismic.io/dashboard/login'><img src={admin} alt="admin" /></a></li>
      </ul>
    </div>
  )
}
