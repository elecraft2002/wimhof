import React from 'react'
import "./aboutMe.css"
import { ReactComponent as Name } from "../../assets/svgs/name.svg"
import photo from "../../assets/images/Image 1.png"
import Card from 'react-animated-3d-card'
import certificate from "../../assets/images/whm_cerftified_instructor_logo_01.png"
import { Fade } from 'react-reveal'
import { PrismicRichText } from '@prismicio/react'

export default function AboutMe({ data }) {
    return (
        <section className='about'>
            <div className='about__info'>
                <div>
                    <Fade top delay={500}><h2 id='about'>{data.o_mne[0].text}</h2></Fade>
                    <Fade top delay={500}><Name className='about__author__name' />{/* <img className='about__author__name' src={name} alt="Zuzana Ježková" /> */}</Fade>
                </div>
                <Fade top delay={500}>
                    <div className='about__text'><PrismicRichText field={data.o_mne_popis} /></div>
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
