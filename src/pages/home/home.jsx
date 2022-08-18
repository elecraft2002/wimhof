import React from 'react'
import ParallaxScene from "./parallax/ParallaxScene"
import Courses from '../../components/courses/Courses'
import Pilire from './Pilire'
import Recenze from './Recenze'
import AboutMe from './AboutMe'
import { usePrismicDocumentByID } from '@prismicio/react'

export default function Home({ language, url }) {
    console.log(language)
    const page = usePrismicDocumentByID("YslmPxAAACIAXPpC", { lang: language.lang })
    console.log(page)
    if (page[1].state === "loaded")
        return (
            <>

                <ParallaxScene data={page[0].data} url={url} />
                <Courses data={page[0].data} language={language} />
                <Pilire data={page[0].data} />
                <AboutMe data={page[0].data} />
                <Recenze data={page[0].data} language={language} />
            </>
        )
    return null
}
