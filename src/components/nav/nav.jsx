import React, { useState } from 'react'
import "./nav.css"
import NavItem from './NavItem'
import facebook from "../../assets/svgs/facebook.svg"
import instagram from "../../assets/svgs/instagram.svg"
import admin from "../../assets/svgs/admin.svg"

export default function Nav({ navigationList, languageNum, setLanguageNum, language }) {

  console.log(languageNum)

  const [isNavOpened, handleNavOpen] = useState(false)
  return (
    <>
      {isNavOpened ? null : <div className='nav__closer' onClick={() => handleNavOpen(!isNavOpened)}></div>}
      <div className={`menu-bg ${!isNavOpened ? "" : "change"}`} id="menu-bg"></div>
      <div className={`nav ${!isNavOpened ? "" : "change"}`}>
        <div id="menu-bar" className={!isNavOpened ? "" : "change"} onClick={() => handleNavOpen(!isNavOpened)}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <ul className={`nav__list ${!isNavOpened ? "" : "change"}`}>
          {navigationList ? navigationList.data.list.map((item, i) => {
            return <NavItem item={item.cell[0].text} key={i} />
          }) : null}
          <li className='nav__item' onClick={() => setLanguageNum(languageNum + 1)}><a>{language}</a></li>
        </ul>
        <ul className='nav__list'>
          <li className='nav__item'><a href=''><img src={facebook} alt="facebook" /></a></li>
          <li className='nav__item'><a href=''><img src={instagram} alt="instagram" /></a></li>
          <li className='nav__item'><a href='https://prismic.io/dashboard/login'><img src={admin} alt="admin" /></a></li>
        </ul>
      </div>
    </>
  )
}
