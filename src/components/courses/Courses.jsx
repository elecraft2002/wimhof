import { useAllPrismicDocumentsByType, usePrismicDocumentsByIDs, usePrismicDocumentsByType } from '@prismicio/react'
import React from 'react'
import Course from '../../components/course/Course'
import "./courses.css"
import { Fade } from 'react-reveal'

export default function Courses(props) {
    const [courses] = useAllPrismicDocumentsByType("kurz", { lang: props.language.lang })
    console.log(courses)
    if (!courses)
        return null
    return (
        <div className='courses'>
            <Fade top delay={500}><h2 className='courses__headding'>Kurzy</h2></Fade>
            <ul className='courses__list'>
                {courses.map((course) => {
                    return <Course key={course.id} course={course}></Course>
                })}
            </ul>
        </div>
    )
}
