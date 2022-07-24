import { useAllPrismicDocumentsByType, usePrismicDocumentsByIDs, usePrismicDocumentsByType } from '@prismicio/react'
import React from 'react'
import Course from '../../components/course/Course'
import "./courses.css"

export default function Courses(props) {
    const [courses] = useAllPrismicDocumentsByType("kurz", { lang: props.language.lang })
    console.log(courses)
    if (!courses)
        return null
    console.log("xdd")
    return (
        <div className='courses'>
            <h2>Kurzy</h2>
            <ul className='courses__list'>
                {courses.map((course) => {
                    return <Course key={course.id} course={course}></Course>
                })}
            </ul>
        </div>
    )
}
