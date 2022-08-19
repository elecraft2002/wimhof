import React from 'react'

export default function GalleryImage({ img }) {
    //console.log(img)
    return (
        <figure className='gallery__image__container'>
            <img className='gallery__image' src={img.url} alt={img.alt} />
        </figure>
    )
}
