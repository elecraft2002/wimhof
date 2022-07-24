import React from 'react'
import "./course.css"
import location from "../../assets/svgs/location.svg"
import info from "../../assets/svgs/info.svg"
import profile from "../../assets/images/Intersection 1.png"
import Button from '../button/Button'
import * as prismicH from '@prismicio/helpers';

export default function Course({ course }) {

    console.log(course.data.datum_kurzu)
    const date = course.data.datum_kurzu ? prismicH.asDate(course.data.datum_kurzu) : null
    const dateEnd = course.data.konec_kurzu ? prismicH.asDate(course.data.konec_kurzu) : null
    console.log(date)

    return (
        <div className='course'>
            <div className='course__upper' style={course.data.uvodni_fotografie_kurzu.url ? { background: `linear-gradient(to top, rgba(255, 255, 255, 0.514) 10%, rgba(255,255,255,1)), url(${course.data.uvodni_fotografie_kurzu.url})`,backgroundSize:"cover",backgroundPosition:"bottom" } : null}>
                <div className='course__row'>
                    <div>
                        {date ? <time className='course__date'>{date.toLocaleDateString()}</time> : null}
                        {course.data.nadpis[0] ? <span><img src={info} alt="info" /><h3>{course.data.nadpis[0].text}</h3></span> : null}
                    </div>
                    <figure className='course__image__container'>
                        <img src={profile} alt="profile picture" />
                    </figure>
                </div>
                {course.data.lokace_kurzu ? <span><img src={location} alt="location" /><h3>{course.data.lokace_kurzu}</h3></span> : null}
                {course.data.cena_kurzu[0] ? <p className='course__price'>{parseInt(course.data.cena_kurzu[0].text)} Kč</p> : null}
            </div>
            <div className='course__bottom'>
                {date ? <div className='course__info'>
                    <h4>Začátek</h4>
                    <p>{date.getDate()}. {date.getMonth() + 1}.</p>
                    <p>{date.getHours()}</p>
                </div> : null}
                {dateEnd ? <div className='course__info'>
                    <h4>Konec</h4>
                    <p>{dateEnd.getDate()}. {dateEnd.getMonth() + 1}.</p>
                    <p>16:00</p>
                </div> : null}
                {date && dateEnd ? <div className='course__info'>
                    <h4>Trvání</h4>
                    <p>6h</p>
                </div> : null}
                {course.data.lokace_kurzu ? <div className='course__info'>
                    <h4>Lokace</h4>
                    <p>{course.data.lokace_kurzu}</p>
                </div> : null}
                <Button>Více</Button>
            </div>
        </div>
    )
}
