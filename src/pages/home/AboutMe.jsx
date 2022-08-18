import React from 'react'
import "./aboutMe.css"
import name from "../../assets/svgs/name.svg"
import photo from "../../assets/images/Image 1.png"
import Card from 'react-animated-3d-card'
import certificate from "../../assets/images/whm_cerftified_instructor_logo_01.png"
import { Fade } from 'react-reveal'

export default function AboutMe() {
    return (
        <section className='about'>
            <div className='about__info'>
                <div>
                    <Fade top delay={500}><h2 id='about'>O mně</h2></Fade>
                    <Fade top delay={500}><img className='about__author__name' src={name} alt="Zuzana Ježková" /></Fade>
                </div>
                <Fade top delay={500}>
                    <div className='about__text'><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</p></div>
                </Fade>
                <Fade right delay={500}><img className='about__certificate' src={certificate} alt={certificate} /></Fade>
            </div>
            <div className='about__image'>
                <Fade right delay={500}>
                    <figure className='about__image__container'>
                        <img src={photo} alt="Zuzana Ježková" />
                    </figure>
                </Fade>
            </div>
        </section>
    )
}
