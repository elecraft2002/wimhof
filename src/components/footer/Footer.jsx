import React from 'react'
import "./footer.css"
import wave from "../../assets/svgs/wave3.svg"
import facebook from "../../assets/svgs/facebook.svg"
import instagram from "../../assets/svgs/instagram.svg"
import NavItem from '../nav/NavItem'
import certificate from "../../assets/images/whm_cerftified_instructor_logo_02.png"

export default function Footer(props) {
    if (!props.navigationList)
        return null
    console.log(props.navigationList)
    return (
        <footer className='footer'>
            <img className='footer__wave' src={wave} alt='wave' />
            <div className='footer__list'>
                <div className='footer__block'>
                    <h3>Sociální sítě</h3>
                    <div className='footer__socials'>
                        <a href=''><img src={facebook} alt="facebook" /></a>
                        <a href=''><img src={instagram} alt="instagram" /></a>
                    </div>
                </div>
                <div className='footer__block'>
                    <h3>Navigace</h3>
                    <div className='footer__data'>
                        <ul>
                            {props.navigationList.data.list.map((item,i) => {
                                return <NavItem key={i} >{item.cell[0].text}</NavItem>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='footer__block'>
                    <h3>Kontakt</h3>
                    <div className='footer__data'>
                        <ul>
                            <li ><a href='tel:+420 603 918 043'>+420 603 918 043</a></li>
                            <li ><a href='mailto: zu.jezkova@gmail.com'>zu.jezkova@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <img className='footer__cerfiticate' src={certificate} alt="certificate" />
                <div className='footer__line'></div>
                <p className='footer__autor'><a href='https://www.instagram.com/vojtik_suchanek/' >2022 Vojtík Suchánek</a></p>
            </div>
        </footer>
    )
}
