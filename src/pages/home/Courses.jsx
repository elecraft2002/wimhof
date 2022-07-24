import { useAllPrismicDocumentsByType, usePrismicDocumentsByIDs, usePrismicDocumentsByType } from '@prismicio/react'
import React from 'react'
import Course from '../../components/course/Course'

export default function Courses(props) {
    const [courses] = useAllPrismicDocumentsByType("kurz", { lang: props.language.lang })
    console.log(courses)
    if (!courses)
        return null
    return (
        <>
            {courses.map((course) => {
                return <Course key={course.id} course={course}></Course>
            })}
        </>
    )
}
