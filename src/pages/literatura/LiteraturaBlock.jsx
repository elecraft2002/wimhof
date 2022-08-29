import { PrismicRichText } from '@prismicio/react'
import React from 'react'

export default function LiteraturaBlock({ data: { data } }) {
    return (
        <article className='comment'>
            <h3>{data.nadpis[0].text}</h3>
            <PrismicRichText field={data.popis}/>
        </article>
    )
}
