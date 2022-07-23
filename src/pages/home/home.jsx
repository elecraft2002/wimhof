import React from 'react'
import ParallaxScene from "./parallax/ParallaxScene"
import { PrismicRichText, useFirstPrismicDocument, usePrismicDocumentByID, usePrismicDocumentByUID, usePrismicDocumentsByTag, usePrismicDocumentsByType, useSinglePrismicDocument } from '@prismicio/react'

export default function Home() {
    const [page] = useSinglePrismicDocument("navigation")
    console.log(page)
    return (
        <>
            <div style={{ height: "3000px" }}>
                <ParallaxScene>

                </ParallaxScene>
            </div>
        </>
    )
}
