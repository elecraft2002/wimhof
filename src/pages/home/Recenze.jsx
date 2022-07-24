import { useAllPrismicDocumentsByType } from '@prismicio/react'
import Comment from '../../components/comment/Comment.jsx'
import React from 'react'
import wave from "../../assets/svgs/wave2.svg"
import "./recenze.css"
import { Fade } from 'react-reveal'

export default function Recenze(props) {
    const [recenze] = useAllPrismicDocumentsByType("recenze", { lang: props.language.lang })
    if (!recenze)
        return null
    return (
        <section className='recenze'>
            <img className='recenze__wave' src={wave} alt="wave" />
            <Fade top delay={500}><h2>Recenze</h2></Fade>
            <div className='recenze__list'>
                {recenze.map(recenze => {
                    return <Comment recenze={recenze} key={recenze.id} />
                })}
            </div>
        </section>
    )
}
