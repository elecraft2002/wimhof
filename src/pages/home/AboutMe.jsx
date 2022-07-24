import React from 'react'
import "./aboutMe.css"
import name from "../../assets/svgs/name.svg"
import photo from "../../assets/images/Image 1.png"
import Card from 'react-animated-3d-card'
import certificate from "../../assets/images/whm_cerftified_instructor_logo_01.png"

export default function AboutMe() {
    return (
        <section className='about'>
            <div className='about__info'>
                <div>
                    <h2>O mně</h2>
                    <img className='about__author__name' src={name} alt="Zuzana Ježková" />
                </div>
                <div className='about__text'><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</p></div>
                <img className='about__certificate' src={certificate} alt={certificate} />
            </div>
            <div className='about__image'>
                <figure className='about__image__container'>
                    <img src={photo} alt="Zuzana Ježková" />
                </figure>
            </div>
        </section>
    )
}
