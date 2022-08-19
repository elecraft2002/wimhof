import { PrismicRichText } from '@prismicio/react'
import React from 'react'
import { Fade } from 'react-reveal'
import GalleryImage from './GalleryImage'
import { LightgalleryProvider } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

export default function GallerySection({ section }) {
    console.log(section)

    return (
        <Fade >
            <section className='gallery__section'>
                <h3>{section.data.nadpis[0] ? section.data.nadpis[0].text : null}</h3>
                {section.data.popis ? <PrismicRichText field={section.data.popis} /> : null}
                <LightgalleryProvider>
                    <div  className='gallery__section__container'>
                        {section.data.obrazky.map((img, i) => {
                            return <GalleryImage group={section.data.nadpis[0]} key={i} img={img.obrazek} />
                        })}
                    </div>
                </LightgalleryProvider>
            </section>
        </Fade>
    )
}
