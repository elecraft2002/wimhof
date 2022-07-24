import React from 'react'
import ParallaxScene from "./parallax/ParallaxScene"
import { PrismicRichText, useFirstPrismicDocument, usePrismicDocumentByID, usePrismicDocumentByUID, usePrismicDocumentsByTag, usePrismicDocumentsByType, useSinglePrismicDocument } from '@prismicio/react'
import Courses from './Courses'

export default function Home(props) {
    const [page] = useSinglePrismicDocument("navigation")
    //console.log(page)
    return (
        <>
            <div style={{ height: "3000px" }}>
                <ParallaxScene />
                <Courses language={props.language} />
            </div>
        </>
    )
}
