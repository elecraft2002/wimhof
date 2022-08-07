import React from 'react'
import ParallaxScene from "./parallax/ParallaxScene"
import Courses from '../../components/courses/Courses'
import Pilire from './Pilire'
import Recenze from './Recenze'
import AboutMe from './AboutMe'

export default function Home(props) {
    return (
        <>
        
            <ParallaxScene />
            <Courses language={props.language} />
            <Pilire />
            <AboutMe />
            <Recenze language={props.language} />
        </>
    )
}
