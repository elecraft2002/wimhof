import React, { useState } from 'react'
import "./nav.css"
import NavItem from './NavItem'
import facebook from "../../assets/svgs/facebook.svg"
import instagram from "../../assets/svgs/instagram.svg"
import admin from "../../assets/svgs/admin.svg"
import { ReactComponent as Logo } from "../../assets/svgs/wim_icon.svg"
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav({ url, navigationList, languageNum, setLanguageNum, language }) {

  //console.log(languageNum)

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
        <Link to={"/"} className='nav__item nav__logo nav__logo--pc'><Logo /></Link>
        <ul className={`nav__list ${!isNavOpened ? "" : "change"}`}>
          <li className='nav__item'><Link to={url} className='nav__logo--mobile nav__logo'><Logo /></Link></li>
          {navigationList ? navigationList.data.list.map((item, i) => {
            {/* <NavItem url={url} key={i} id={i} >{item.cell[0].text}</NavItem> */ }
            const links = [
              "/#about",
              "/literatura/",
              "/#courses",
              "/gallery/",
            ]
            return (< li key={i} className='nav__item' >
              <Link to={links[i]}>{item.cell[0].text}</Link>
            </li>)
          }) : null}
          <li className='nav__item' onClick={() => setLanguageNum(languageNum + 1)}><a>{language}</a></li>
        </ul>
        <ul className='nav__list'>
          {/* <li className='nav__item'><Link to=''><img src={facebook} alt="facebook" /></Link></li> */}
          <li className='nav__item'><a href='https://www.instagram.com/zuzana.jezkova/'><img src={instagram} alt="instagram" /></a></li>
          <li className='nav__item'><a href='https://prismic.io/dashboard/login'><img src={admin} alt="admin" /></a></li>
        </ul>
      </div>
    </>
  )
}
