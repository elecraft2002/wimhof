import { useAllPrismicDocumentsByType, usePrismicDocumentsByIDs, usePrismicDocumentsByType } from '@prismicio/react'
import React from 'react'
import Course from '../../components/course/Course'
import "./courses.css"
import { Fade } from 'react-reveal'
import * as prismicH from '@prismicio/helpers';

export default function Courses({ language, data }) {
    const [courses] = useAllPrismicDocumentsByType("kurz", { lang: language.lang })
    let courseListSorted = courses
    // console.log(Date.now())
    if (!courses)
        return null
    courseListSorted.sort((a, b) => {
        // console.log(prismicH.asDate(a.data.datum_kurzu).getTime())
        const dateA = prismicH.asDate(a.data.datum_kurzu).getTime()
        const dateB = prismicH.asDate(b.data.datum_kurzu).getTime() || 0
        if (dateA < dateB) {
            return -1;
        }
        if (dateA > dateB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    return (
        <div className='courses'>
            <Fade top delay={500}><h2 id='courses' className='courses__headding'>{data.kurzy[0].text}</h2></Fade>
            <ul className='courses__list'>
                {courseListSorted.map((course) => {
                    //console.log(course)
                    if (prismicH.asDate(course.data.datum_kurzu).getTime() > Date.now())
                        return <Course key={course.id} course={course}></Course>
                    return null
                })}
            </ul>
        </div>
    )
}
