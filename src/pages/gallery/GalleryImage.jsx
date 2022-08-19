import React from 'react'
import { LightgalleryItem } from 'react-lightgallery'

export default function GalleryImage({ img,group }) {
    //console.log(img)
    return (
        <LightgalleryItem group={group} src={img.url}>
            
                <figure className='gallery__image__container'>
                    <img className='gallery__image' src={img.url} alt={img.alt} />
                </figure>
          
        </LightgalleryItem>
    )
}
