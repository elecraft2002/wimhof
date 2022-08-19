import { usePrismicDocumentsByType } from '@prismicio/react'
import React from 'react'
import { Fade } from 'react-reveal'
import "./gallery.css"
import GallerySection from './GallerySection'

export default function Gallery() {
    const gallery = usePrismicDocumentsByType("galerie")
    return (
        <div className='gallery'>
            <div>
                <Fade left><h2 className='gallery__heading'>Galerie</h2></Fade>
            </div>
            <div >
                {gallery[1].state == "loaded" ? gallery[0].results.map((section, i) => {
                    return <GallerySection key={i} section={section} />
                })
                    : null}
            </div>
        </div>
    )
}
