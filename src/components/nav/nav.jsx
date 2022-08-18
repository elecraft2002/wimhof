import React, { useState } from 'react'
import "./nav.css"
import NavItem from './NavItem'
import facebook from "../../assets/svgs/facebook.svg"
import instagram from "../../assets/svgs/instagram.svg"
import admin from "../../assets/svgs/admin.svg"
import { ReactComponent as Logo } from "../../assets/svgs/wim_icon.svg"

export default function Nav({ navigationList, languageNum, setLanguageNum, language }) {

  //console.log(languageNum)
  const url = "http://" + window.location.host + "/wimhof"
  const [isNavOpened, handleNavOpen] = useState(false)
  return (
    <>
      {!isNavOpened ? null : <div className='nav__closer' onClick={() => handleNavOpen(!isNavOpened)}></div>}
      <div className={`menu-bg ${!isNavOpened ? "" : "change"}`} id="menu-bg"></div>
      <div className={`nav ${!isNavOpened ? "" : "change"}`}>
        <div id="menu-bar" className={!isNavOpened ? "" : "change"} onClick={() => handleNavOpen(!isNavOpened)}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <a href={url} className='nav__item nav__logo nav__logo--pc'><Logo /></a>
        <ul className={`nav__list ${!isNavOpened ? "" : "change"}`}>
          <li className='nav__item'><a href={url} className='nav__logo--mobile nav__logo'><Logo /></a></li>
          {navigationList ? navigationList.data.list.map((item, i) => {
            return <NavItem url={url} key={i} id={i} >{item.cell[0].text}</NavItem>
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
