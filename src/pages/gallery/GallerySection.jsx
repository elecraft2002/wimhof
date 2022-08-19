import { PrismicRichText } from '@prismicio/react'
import React from 'react'
import GalleryImage from './GalleryImage'

export default function GallerySection({ section }) {
    console.log(section)

    return (
        <section className='gallery__section'>
            <h3>{section.data.nadpis[0] ? section.data.nadpis[0].text : null}</h3>
            {section.data.popis ? <PrismicRichText field={section.data.popis}/> : null}
            <div className='gallery__section__container'>
                {section.data.obrazky.map((img, i) => {
                    return <GalleryImage key={i} img={img.obrazek} />
                })}
            </div>
        </section>
    )
}
