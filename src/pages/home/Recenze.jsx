import { useAllPrismicDocumentsByType } from '@prismicio/react'
import Comment from '../../components/comment/Comment.jsx'
import React from 'react'
import wave from "../../assets/svgs/wave2.svg"
import "./recenze.css"

export default function Recenze(props) {
    const [recenze] = useAllPrismicDocumentsByType("recenze", { lang: props.language.lang })
    if (!recenze)
        return null
    return (
        <section className='recenze'>
            <img className='recenze__wave' src={wave} alt="wave" />
            <h2>Recenze</h2>
            <div className='recenze__list'>
                {recenze.map(recenze => {
                    return <Comment recenze={recenze} key={recenze.id} />
                })}
            </div>
        </section>
    )
}
