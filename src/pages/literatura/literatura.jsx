import { usePrismicDocumentsByType } from '@prismicio/react'
import React from 'react'
import { Fade } from 'react-reveal'
import "./literatura.css"
import LiteraturaBlock from './LiteraturaBlock'
import "../home/recenze.css"

export default function Literatura() {
    const literatura = usePrismicDocumentsByType("literatura", { pageSize: 100 })
    const odkazy = usePrismicDocumentsByType("odkazy", { pageSize: 100 })
    return (
        <div className='gallery'>
            <div>
                <Fade left><h2 className='gallery__heading'>Literatura</h2></Fade>
            </div>
            <div className='recenze__list'>
                {literatura[1].state === 'loaded' ? literatura[0].results.map((data, i) => {
                    return <LiteraturaBlock key={i} data={data} />
                }) : null}
            </div>
            <div>
                <Fade left><h2 className='gallery__heading'>Odkazy</h2></Fade>
            </div>
            <div className='recenze__list'>
                {odkazy[1].state === 'loaded' ? odkazy[0].results.map((data, i) => {
                    return <a key={i} href={odkazy[0]?.results[0]?.data.odkaz?.url} target={'_blank'}><LiteraturaBlock data={data} /></a>
                }) : null}
            </div>
        </div>
    )
}
