import React from 'react'
import "./course.css"
import { ReactComponent as LocationSvg } from "../../assets/svgs/location.svg"
import { ReactComponent as InfoSvg } from "../../assets/svgs/info.svg"
import profile from "../../assets/images/Intersection 1.png"
import Button from '../button/Button'
import * as prismicH from '@prismicio/helpers';
import { Fade } from 'react-reveal'
import { usePrismicDocumentByID } from '@prismicio/react'

export default function Course({ course }) {
    const url = window.location.origin
    //console.log(course.data.datum_kurzu)
    const date = course.data.datum_kurzu ? prismicH.asDate(course.data.datum_kurzu) : null
    const dateEnd = course.data.konec_kurzu ? prismicH.asDate(course.data.konec_kurzu) : null

    //console.log(date.toLocaleDateString())

    return (
        <div className='course'>
            <div className='course__upper' style={course.data.uvodni_fotografie_kurzu.url ? { background: `linear-gradient(to top, rgba(255, 255, 255, 0.514) 10%, rgba(255,255,255,1)), url(${course.data.uvodni_fotografie_kurzu.url})`, backgroundSize: "cover", backgroundPosition: "bottom" } : null}>
                <div className='course__row'>
                    <div>
                        {date ? <Fade delay={400}><time className='course__date'>{date.toLocaleDateString()}</time></Fade> : null}
                        {course.data.nadpis_kurzu[0] ? <Fade delay={500} left><span style={{ display: "inline-flex", alignItems: "center" }}><InfoSvg /><h3>{course.data.nadpis_kurzu[0].text}</h3></span></Fade> : null}
                    </div>
                    <Fade right delay={400}>
                        <figure className='course__image__container'>
                            <img src={profile} alt="profile picture" />
                        </figure>
                    </Fade>
                </div>
                {course.data.lokace_kurzu ? <Fade left delay={500}><span style={{ display: "inline-flex", alignItems: "center" }}><LocationSvg /><h3>{course.data.lokace_kurzu}</h3></span></Fade> : null}
                {course.data.cena_kurzu[0] ? <Fade left delay={500}><p className='course__price'>{parseInt(course.data.cena_kurzu[0].text)} Kč</p></Fade> : null}
            </div>
            <div className='course__bottom'>
                {date ? <Fade top delay={500}><div className='course__info'>
                    <h4>Začátek</h4>
                    <p>{date.getDate()}. {date.getMonth() + 1}.</p>
                    <p>{date.getHours() + ':' + date.getMinutes()}</p>
                </div></Fade> : null}
                {dateEnd ? <Fade top delay={550}><div className='course__info'>
                    <h4>Konec</h4>
                    <p>{dateEnd.getDate()}. {dateEnd.getMonth() + 1}.</p>
                    <p>{dateEnd.getHours() + ':' + dateEnd.getMinutes()}</p>
                </div> </Fade> : null}
                {date && dateEnd ? <Fade top delay={600}><div className='course__info'>
                    <h4>Trvání</h4>
                    <p>6h</p>
                </div> </Fade> : null}
                {course.data.lokace_kurzu ? <Fade top delay={650}><div className='course__info'>
                    <h4>Lokace</h4>
                    <p>{course.data.lokace_kurzu}</p>
                </div> </Fade> : null}
                <Fade delay={700}><Button href={`${url}/course/${course.id}`}>Více</Button></Fade>
            </div>
        </div >
    )
}