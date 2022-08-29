import { usePrismicDocumentsByType } from '@prismicio/react'
import React from 'react'
import { Fade } from 'react-reveal'
import "./literatura.css"
import LiteraturaBlock from './LiteraturaBlock'
import "../home/recenze.css"

export default function Literatura() {
    const literatura = usePrismicDocumentsByType("literatura")
    return (
        <div className='gallery'>
            <div>
                <Fade left><h2 className='gallery__heading'>Literatura</h2></Fade>
            </div>
            <div className='recenze__list'>
                {literatura[1].state === 'loaded' ? literatura[0].results.map(data => {
                    return <LiteraturaBlock data={data} />
                }) : null}
            </div>
        </div>
    )
}
