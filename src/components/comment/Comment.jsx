import React from 'react'
import Star from './Star'
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import "./comment.css"
import { Fade } from 'react-reveal'

export default function Comment({ recenze }) {

    function Stars() {
        let stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(<Star active={recenze.data.hvezdy > i} key={recenze.id + i} />)
        }
        return stars
    }

    return (
        <article className='comment'>
            <Fade top delay={500}><div className='comment__rating'><Stars /></div></Fade>
            <Fade left delay={500}><h3 className='comment__autor'>{recenze.data.autor[0].text}</h3></Fade>
            <Fade left delay={500}><PrismicRichText field={recenze.data.text_recenze} /></Fade>
        </article>
    )
}
