import React from 'react'
import ParallaxScene from "./parallax/ParallaxScene"
import { PrismicRichText, useFirstPrismicDocument, usePrismicDocumentByID, usePrismicDocumentByUID, usePrismicDocumentsByTag, usePrismicDocumentsByType, useSinglePrismicDocument } from '@prismicio/react'
import Courses from './Courses'
import Pilire from './Pilire'
import Recenze from './Recenze'

export default function Home(props) {
    const [page] = useSinglePrismicDocument("navigation")
    //console.log(page)
    return (
        <>
            <ParallaxScene />
            <Courses language={props.language} />
            <Pilire />
            <Recenze />
        </>
    )
}
